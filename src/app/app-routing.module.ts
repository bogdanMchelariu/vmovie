import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/core/guards';

const routes: Routes = [
  // {
  //   path: '',
  // },
  // {
  //   path: '**',
  //   pathMatch: 'full',
  //   redirectTo: ''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
