import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent, AutocompleteComponent, MovieItemComponent, MovieFavoriteItemComponent } from './components';
import { HomeComponent } from './components/home/home.component';
import { MovieService } from './services';

@NgModule({
  declarations: [HeaderComponent, AutocompleteComponent, MovieItemComponent, HomeComponent, MovieFavoriteItemComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  exports: [HeaderComponent, AutocompleteComponent, MovieItemComponent, HomeComponent, MovieFavoriteItemComponent],
  providers: [MovieService]
})
export class CoreModule {}
