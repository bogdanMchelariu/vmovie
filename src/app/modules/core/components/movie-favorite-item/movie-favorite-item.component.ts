import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IMovie } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'vm-movie-favorite-item',
  templateUrl: './movie-favorite-item.component.html',
  styleUrls: ['./movie-favorite-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieFavoriteItemComponent {
  @Input() movie: IMovie;

  constructor(private router: Router) { }

  openMovieDetails(){
    this.router.navigate(['movie', this.movie.id])
  }

}
