import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MovieDetailsService } from '../../service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { IMovie } from 'src/app/modules/core/models';

@Component({
  selector: 'vm-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MovieDetailsService]
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie: Observable<IMovie>;
  subscription: Subscription;

  constructor(
    private movieDetailsService: MovieDetailsService,
    private router: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.subscription = this.router.params.subscribe(url => {
      this.movie = this.movieDetailsService.getMovie(url.movieId);
    });
  }

  markMovieAsFavorite(movie: IMovie) {
    this.movieDetailsService
      .markMovieAsFavorite(movie.id, true)
      .subscribe(res => this.snackBar.open(res.status_message, 'OK'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
