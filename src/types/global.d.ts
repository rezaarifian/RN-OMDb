type MovieListProps = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type Rating = {
  Source: string;
  Value: string;
};

type MovieDetailProps = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response?: string;
};
