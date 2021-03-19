import {ALL_GENRES} from "../consts";

export const ActionType = {
  GET_ALL_FILMS: `films/getAllFilms`,
  CHANGE_GENRE: `genre/changeGenre`,
  RESET_GENRE: `genre/reset`,
};

export const ActionCreator = {
  getAllFilms: () => ({
    type: ActionType.GET_ALL_FILMS,
  }),

  changeGenre: (payload) => ({
    type: ActionType.CHANGE_GENRE,
    payload,
  }),

  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
    payload: ALL_GENRES,
  })
};
