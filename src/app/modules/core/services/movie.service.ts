import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { IResponseMovies, IMovie } from '../models';

@Injectable()
export class MovieService {
  favoriteMovies: IMovie[] = [];
  constructor(private httpClient: HttpClient, private authService: AuthService) {}

  searchMovie(title: string): Observable<IResponseMovies> {
    return this.httpClient.get<IResponseMovies>(
      environment.baseUrl.search_movie + environment.api_key + environment.movie_query + title
    );
  }

  getFavoriteMovies(pageNumber: number): Observable<IResponseMovies> {
    return this.httpClient
      .get<IResponseMovies>(
        `
    https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=${
      environment.api_key
    }&session_id=${this.authService.getSessionIdLocalStorage()}&language=en-US&sort_by=created_at.asc&page=${pageNumber}
    `
      )
      .pipe(tap(res => (this.favoriteMovies = res.results)));
  }
}
