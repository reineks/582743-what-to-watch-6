import {SECONDS_IN_MINUTE, SECONDS_IN_HOUR, RatingLevel, ALL_GENRES} from "./consts";

export const getRankLabel = (rank) => {

  if (rank <= 3) {
    return RatingLevel.BAD;
  } else if (rank <= 5) {
    return RatingLevel.NORMAL;
  } else if (rank <= 8) {
    return RatingLevel.GOOD;
  } else if (rank <= 8) {
    return RatingLevel.VERY_GOOD;
  } else {
    return RatingLevel.AWESOME;
  }
};

export const getFilmsByGenre = (genre, films) => {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
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

export const dataToUserInfo = (data) => {
  return ({
    id: data[`id`],
    email: data[`email`],
    name: data[`name`],
    avatarUrl: data[`avatar_url`]
  });
};

export const convertSecondsToHHMMss = (totalSeconds) => {
  const secondsNumber = parseInt(totalSeconds, 10);
  const hours = Math.floor(secondsNumber / SECONDS_IN_HOUR);
  const minutes = Math.floor((secondsNumber - (hours * SECONDS_IN_HOUR)) / SECONDS_IN_MINUTE);
  const seconds = secondsNumber - (hours * SECONDS_IN_HOUR) - (minutes * SECONDS_IN_MINUTE);

  return `${String(hours).padStart(2, `0`)}:${String(minutes).padStart(2, `0`)}:${String(seconds).padStart(2, `0`)}`;
};
