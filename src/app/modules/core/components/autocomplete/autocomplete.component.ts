import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged, switchMap, share, tap, filter } from 'rxjs/operators';
import { IResponseMovies } from '../../models/IResponseMovies';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../models/IMovie';
import { Router } from '@angular/router';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'vm-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  movieInput = new FormControl();
  filteredMovies: Observable<IResponseMovies>;

  constructor(private movieService: MovieService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.filteredMovies = this.movieInput.valueChanges.pipe(
      startWith<any>(''),
      map(value => {
        return this.isValueObject(value) ? value.title : value;
      }),
      debounceTime(250),
      filter(query => query.length >= 2 || query.length !== 0 || typeof query !== 'string'),
      distinctUntilChanged(),
      switchMap(query => {
        return this.movieService.searchMovie(query);
      })
    );
  }

  private isValueObject(val): boolean {
    if (val === null) {
      return false;
    }
    return typeof val === 'function' || typeof val === 'object';
  }

  displayFn(movie: IMovie): string {
    if (movie) {
      return movie.title;
    }
  }

  openMovie(movie: IMovie) {
    this.router.navigate(['movie', movie.id]);
  }
}
