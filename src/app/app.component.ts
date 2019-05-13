import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'vm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor( private location: Location) {}

  ngOnInit() {
    this.location.go('');
  }
}
