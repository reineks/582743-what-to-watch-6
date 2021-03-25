import {GENRES_LIST_COUNT, ALL_GENRES, DEFAULT_GENRE} from "./consts";

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

const rawToFilm = (raw) => {
  return ({
    id: raw.id,
    title: raw.name,
    posterImage: raw.poster_image,
    previewImage: raw.preview_image,
    previewVideoPoster: raw.poster_image,
    backgroundImage: raw.background_image,
    backgroundColor: raw.background_color,
    videoLink: raw.video_link,
    previewVideoLink: raw.preview_video_link,
    description: [raw.description],
    rating: raw.rating,
    scoresCount: raw.scores_count,
    director: raw.director,
    starring: raw.starring,
    runTime: raw.run_time,
    genre: raw.genre,
    released: raw.released,
    isFavorite: raw.is_favorite,
  });
};

const rawToComment = (raw) => Object.assign({}, raw, {date: raw.date.slice(0, 10)});

export const adapter = {
  rawToFilm,
  rawToComment,
};
