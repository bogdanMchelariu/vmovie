import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseMovies } from '../../models';
import { MovieService } from '../../services';

@Component({
  selector: 'vm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getFavoriteMovies(1).subscribe();
  }
}
