import {ALL_GENRES} from "../consts";

export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  LOAD_COMMENTS: `data/loadComments`,
};

export const ActionCreator = {
  changeGenre: (payload) => ({
    type: ActionType.CHANGE_GENRE,
    payload,
  }),

  resetGenre: () => ({
    type: ActionType.CHANGE_GENRE,
    payload: ALL_GENRES,
  }),

  loadFilms: (payload) => ({
    type: ActionType.LOAD_FILMS,
    payload,
  }),

  loadPromo: (payload) => ({
    type: ActionType.LOAD_PROMO,
    payload,
  }),

  loadComments: (payload) => ({
    type: ActionType.LOAD_COMMENTS,
    payload,
  }),
};
