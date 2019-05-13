import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IResponseMovies } from '../models/IResponseMovies';

@Injectable()
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  searchMovie(title: string): Observable<IResponseMovies> {
    return this.httpClient.get<IResponseMovies>(
      environment.baseUrl.search_movie + environment.api_key + environment.movie_query + title
    );
  }
}
