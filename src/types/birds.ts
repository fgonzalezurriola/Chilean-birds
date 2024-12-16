export interface Bird {
  uid: string;
  name: {
    spanish: string;
    english: string;
    latin: string;
  };
  images: {
    main: string;
    full: string;
    thumb: string;
  };
  _links: {
    self: string;
    parent: string;
  };
  sort: number;
}
