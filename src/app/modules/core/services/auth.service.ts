import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { IAccount, IToken, ISession } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getToken() {
    return this.httpClient
      .get(environment.baseUrl.auth_token + environment.api_key)
      .pipe(
        tap(
          (response: IToken) =>
            (window.location.href =
              environment.authUrl + response.request_token + '?redirect_to=http://localhost:4200/')
        )
      );
  }
  getSessionId(token: string): Observable<ISession> {
    return this.httpClient
      .post<ISession>(environment.baseUrl.auth_session + environment.api_key, {
        request_token: token
      })
      .pipe(
        tap(res => this.setSessionIdLocalStorage(res.session_id)),
        catchError(err => this.handleError(err))
      );
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error.status_message}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
