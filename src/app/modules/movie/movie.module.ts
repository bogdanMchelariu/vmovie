import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './components';

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
