import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent, AutocompleteComponent, MovieItemComponent } from './components';
import { MovieService } from './services';

@NgModule({
  declarations: [HeaderComponent, AutocompleteComponent, MovieItemComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  exports: [HeaderComponent, AutocompleteComponent, MovieItemComponent],
  providers: [MovieService]
})
export class CoreModule {}
