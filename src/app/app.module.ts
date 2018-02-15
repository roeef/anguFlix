import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BugetStatusComponent } from './buget-status/buget-status.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import {MovieService} from './movie-service.service';


@NgModule({
  declarations: [
    AppComponent,
    BugetStatusComponent,
    MovieListComponent,
    SearchFilterComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
