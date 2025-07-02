export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  original_title: string;
  original_language: string;
};

export type TrailerVideo = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
};
export type User = {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
};
