import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AppInitService {
  constructor(private authService: AuthService) {}

  initializeApp() {
    return new Promise(resolve => {
      if (this.authService.getSessionIdLocalStorage()) {
        resolve();
      } else {
        const url = window.location.href;
        const request_token = url.substring(
          url.indexOf('request_token=') + 'request_token='.length,
          url.indexOf('&approved=')
        );
        if (request_token !== 'http://localh') {
          this.authService.getSessionId(request_token).subscribe(() => {
            resolve();
          });
        } else {
          this.authService.getToken().subscribe();
          resolve();
        }
      }
    });
  }
}
