import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged, switchMap, share, tap } from 'rxjs/operators';
import { IResponseMovies } from '../../models/IResponseMovies';
import { MovieService } from '../../services/movie.service';
import { IMovie } from '../../models/IMovie';

@Component({
  selector: 'vm-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  moviesForm: FormGroup;

  stateCtrl = new FormControl();
  filteredMovies: Observable<IResponseMovies>;
  constructor(private movieService: MovieService, private fb: FormBuilder) {}

  ngOnInit() {
    this.moviesForm = this.fb.group({
      movieInput: null
    });
    this.filteredMovies = this.moviesForm.get('movieInput').valueChanges.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      switchMap(value => {
        return this.movieService.searchMovie(value);
      })
    );
  }

  displayFn(movie: IMovie) {
      if (movie) { return movie.title; }
  }
}
