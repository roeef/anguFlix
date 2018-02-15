import { Component } from '@angular/core';
import {MovieService} from './movie-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private movieService: MovieService) {}
  title = 'AnguFlix';
  get myMovies() {
    return this.movieService.myMovies;
  }

  get allMovies() {
    return this.movieService.allMovies;
  }
  allTitle = 'All Movies!';
  myLibTitle = 'My Collection!';
}
