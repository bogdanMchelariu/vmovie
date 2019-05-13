import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IAccount, IToken, ISession } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getToken(): Observable<IToken> {
    return this.httpClient.get<IToken>(`${environment.baseUrl.auth_token + environment.api_key}`).pipe(
      tap(response => {
        window.location.href = environment.authUrl + response.request_token + '?redirect_to=' + window.location.href;
      })
    );
  }
  getSessionId(token: string): Observable<ISession> {
    return this.httpClient
      .post<ISession>(environment.baseUrl.auth_session + environment.api_key, {
        request_token: token
      })
      .pipe(tap(res => this.setSessionIdLocalStorage(res.session_id)));
  }
  getAccount(): Observable<IAccount> {
    return this.httpClient.get<IAccount>(
      environment.baseUrl.account + environment.api_key + '&session_id=' + this.getSessionIdLocalStorage()
    );
  }

  // local storage methods
  private setSessionIdLocalStorage(sessionId: string) {
    localStorage.setItem('session_id', sessionId);
  }
  removeSessionIdLocalStorage() {
    localStorage.removeItem('session_id');
    this.getToken().subscribe();
  }
  getSessionIdLocalStorage() {
    return localStorage.getItem('session_id');
  }
}
