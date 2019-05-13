import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged, switchMap, share, tap, filter } from 'rxjs/operators';
import { IResponseMovies } from '../../models/IResponseMovies';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../models/IMovie';
import { Router } from '@angular/router';

@Component({
  selector: 'vm-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  moviesForm: FormGroup;

  stateCtrl = new FormControl();
  filteredMovies: Observable<IResponseMovies>;
  constructor(private movieService: MovieService, private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.moviesForm = this.fb.group({
      movieInput: null
    });
    this.filteredMovies = this.moviesForm.get('movieInput').valueChanges.pipe(
      filter(query => query.length >= 2 || query.length !== 0),
      debounceTime(250),
      distinctUntilChanged(),
      switchMap(query => {
        return this.movieService.searchMovie(query);
      })
    );
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
