import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/modules/core/models';
import { AuthService } from 'src/app/modules/core/services';

@Component({
  selector: 'vm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userDetails$: Observable<IAccount>;

  constructor(public authService: AuthService) {
    this.userDetails$ = this.authService.getAccount();
  }

  signOut() {
    this.authService.removeSessionIdLocalStorage();
  }
}
