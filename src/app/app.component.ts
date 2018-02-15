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
  // myMovies: Movie[] = [{title: 'My Movies!!', setApiObjet: null, id: 1, apiObject: {}, price: 7},
  //   {title: 'My Movie2!!', setApiObjet: null, id: 1, apiObject: {}, price: 7},
  //   {title: 'My Movie3!!', setApiObjet: null, id: 1, apiObject: {}, price: 7},
  //   {title: 'My Movie4!!', setApiObjet: null, id: 1, apiObject: {}, price: 7}]
  // allMovies: Movie[] = [{title: 'All Movies!!', setApiObjet: null, id: 1, apiObject: {}, price: 7},
  //   {title: 'My Movie2!!', setApiObjet: null, id: 1, apiObject: {}, price: 7},
  //   {title: 'My Movie3!!', setApiObjet: null, id: 1, apiObject: {}, price: 7},
  //   {title: 'My Movie4!!', setApiObjet: null, id: 1, apiObject: {}, price: 7},
  //   ]
  get myMovies() {
    return this.movieService.myMovies;
  }

  get allMovies() {
    return this.movieService.allMovies;
  }
  allTitle = 'All Movies!';
  myLibTitle = 'My Collection!';
}
