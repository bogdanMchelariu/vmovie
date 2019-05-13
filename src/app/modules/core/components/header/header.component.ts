import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/modules/core/models';
import { AuthService } from 'src/app/modules/core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'vm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userDetails$: Observable<IAccount>;

  constructor(public authService: AuthService, private router: Router) {
    this.userDetails$ = this.authService.getAccount();
  }

  signOut() {
    this.authService.removeSessionIdLocalStorage();
  }
  navigateHome(){
    this.router.navigate(['/']);
  }
}
