import {ALL_GENRES} from "../consts";

export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  LOAD_FILMS: `data/loadFilms`,
  LOAD_PROMO: `data/loadPromo`,
  LOAD_COMMENTS: `data/loadComments`,
  REQUIRED_AUTHORIZATION: `main/requiredAuthorization`,
  LOGGED_IN: `user/loggedIn`,
  REDIRECT_TO_ROUTE: `main/redirectToRoute`
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

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  loggedIn: (email, avatar) => ({
    type: ActionType.LOGGED_IN,
    payload: {
      email,
      avatar
    }
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  })
};
