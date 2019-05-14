import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Loading...', request);
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log(event);
          console.log('Loaded...', event);
        }
        return event;
      }),
      catchError((error: any) => {
        const data = {
          reason: error && error.error.reason ? error.error.reason : '',
          status: error.status
        };
        // console.log(data);
        return throwError(error);
      }),
      finalize(() => {
        const msg = `${request.method} "${request.urlWithParams}"`;
        // console.log(msg);
      })
    );
  }
}
