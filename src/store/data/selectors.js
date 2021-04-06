import {GENRES_LIST_COUNT, DEFAULT_GENRE} from "../../consts";
import {createSelector} from 'reselect';
import {NameSpace} from "../reducer";

const getFilmId = (_state, id) => id;
export const getFilms = (state) => state[NameSpace.DATA].films;
export const getPromo = (state) => state[NameSpace.DATA].promo;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
export const getIsAuthorized = (state) => !!state[NameSpace.USER].userAuthorizationInfo;
export const getReviewPostStatus = (state) => state[NameSpace.DATA].reviewPostStatus;
export const getIsDataLoaded = (state) => !!state[NameSpace.DATA].films.length && !!state[NameSpace.DATA].promo;

export const getFilmById = createSelector(
    [getFilms, getFilmId],
    (films, id) => {
      if (Array.isArray(films)) {
        return films.find((film) => film.id === +id);
      }
      return ``;
    }
);

export const getGenreList = (films) => {
  const genres = films.map((film) => film.genre).sort();

  return [DEFAULT_GENRE, ...new Set(genres)].slice(0, GENRES_LIST_COUNT);
};
