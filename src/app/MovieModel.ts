export class Movie {
  title: string;
  price: number;
  id: number;
  img: string;
  year: number;
  descrShort: string;
  actionFlags: boolean[] = [];
  apiObject: Object;

  // set setApiObjet(apiObject) {
  //   this.title = apiObject.title;
  //   this.id = apiObject.id;
  //   this.apiObject = apiObject;
  // }
  constructor(apiObject) {
    // if (apiObject) {
    //   this.setApiObjet = apiObject;
    // }
  }
}
