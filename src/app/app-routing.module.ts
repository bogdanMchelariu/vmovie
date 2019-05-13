import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/core/guards';
import { HomeComponent } from './modules/core/components';

const routes: Routes = [
  {
    path: 'movie/:movieId',
    loadChildren: './modules/movie/movie.module#MovieModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
