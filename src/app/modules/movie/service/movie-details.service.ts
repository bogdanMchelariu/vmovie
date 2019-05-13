import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IMovie, IFavorite } from '../../core/models';
import { AuthService } from '../../core/services';

@Injectable()
export class MovieDetailsService {
  constructor(private httpClient: HttpClient, private authService: AuthService, ) {}

  getMovie(movieId: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${environment.api_key}&language=en-US`
    )
  }

  markMovieAsFavorite(movieId: number, favorite: boolean) {
    return this.httpClient.post<IFavorite>(
      `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${
        environment.api_key
      }&session_id=${this.authService.getSessionIdLocalStorage()}`,
      {
        media_type: 'movie',
        media_id: movieId,
        favorite
      }
    );
  }
}
