import {ALL_GENRES} from "../../consts";

export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  LOAD_COMMENTS: `data/loadComments`,
  REQUIRED_AUTHORIZATION: `main/requiredAuthorization`,
  LOGGED_IN: `user/loggedIn`,
  SET_REVIEW_POST_STATUS: `data/setReviewPostStatus`,
  LOAD_FAVORITES: `data/loadFavorites`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const resetGenre = () => ({
  type: ActionType.CHANGE_GENRE,
  payload: ALL_GENRES,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadPromo = (promo) => ({
  type: ActionType.LOAD_PROMO,
  payload: promo,
});

export const loadComments = (LOAD_COMMENTS) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: LOAD_COMMENTS,
});

export const loadFavorites = (films) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: films,
});

export const setReviewPostStatus = (status) => ({
  type: ActionType.SET_REVIEW_POST_STATUS,
  payload: status,
});
