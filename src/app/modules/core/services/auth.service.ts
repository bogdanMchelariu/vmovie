import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IAccount, IToken, ISession, ApiMethods } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getToken(): Observable<IToken> {
    return this.httpClient.get<IToken>(ApiMethods.auth_token + environment.api_key).pipe(
      tap(response => {
        window.location.href = ApiMethods.authUrl + response.request_token + '?redirect_to=' + window.location.href;
      })
    );
  }
  getSessionId(token: string): Observable<ISession> {
    return this.httpClient
      .post<ISession>(ApiMethods.auth_session + environment.api_key, {
        request_token: token
      })
      .pipe(tap(res => this.setSessionIdLocalStorage(res.session_id)));
  }
  getAccount(): Observable<IAccount> {
    return this.httpClient.get<IAccount>(
      ApiMethods.account + environment.api_key + '&session_id=' + this.getSessionIdLocalStorage()
    );
  }

  // local storage methods
  private setSessionIdLocalStorage(sessionId: string) {
    // TODO encrypt sessionId
    localStorage.setItem('session_id', sessionId);
  }
  removeSessionIdLocalStorage() {
    localStorage.removeItem('session_id');
    this.getToken().subscribe();
  }
  getSessionIdLocalStorage() {
    // TODO decrypt sessionId
    return localStorage.getItem('session_id');
  }
}
