import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, Resolve<any> {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.authService.getSessionIdLocalStorage()) {
        resolve(true);
      } else {
        if (route.queryParams.request_token) {
          this.authService.getSessionId(route.queryParams.request_token).subscribe(() => {
            resolve(true);
          });
        } else {
          this.authService.getToken().subscribe();
          resolve(false);
        }
      }
    });
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return true;
  }
}
