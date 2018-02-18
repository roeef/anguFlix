export class Movie {
  title: string;
  price: number;
  id: number;
  img: string;
  year: number;
  descrShort: string;
  actionFlags: boolean[] = [];
  apiObject: Object;

  set setApiObjet(apiObject) {
    this.title = apiObject.title;
    this.descrShort = apiObject.overview;
    this.img = "http://image.tmdb.org/t/p/w500"+apiObject.poster_path;
    this.id = apiObject.id;
    this.apiObject = apiObject;
  }

  constructor(apiObject = null) {
    if (apiObject) {
      this.setApiObjet = apiObject;
    }
  }
}
