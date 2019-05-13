import { NgModule } from '@angular/core';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailsComponent
  }
];

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class MovieModule {}
