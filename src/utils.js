import {GENRES_LIST_COUNT} from "./consts";
import {ALL_GENRES, DEFAULT_GENRE} from "./consts";

export const getRankLabel = (rank) => {

  if (rank <= 3) {
    return `Bad`;
  } else if (rank <= 5) {
    return `Normal`;
  } else if (rank <= 8) {
    return `Good`;
  } else if (rank <= 8) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

export const getFilmsByGenre = (genre, films) => {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const getGenreList = (films) => {
  const genres = films.map((film) => film.genre).sort();

  return [DEFAULT_GENRE, ...new Set(genres)].slice(0, GENRES_LIST_COUNT);
};
