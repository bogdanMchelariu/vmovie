import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../models/IMovie';

@Component({
  selector: 'vm-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: IMovie;

  constructor() {}

  ngOnInit() {}
}
