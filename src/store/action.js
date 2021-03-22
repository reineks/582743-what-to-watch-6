import {ALL_GENRES} from "../consts";

export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
};

export const ActionCreator = {
  changeGenre: (payload) => ({
    type: ActionType.CHANGE_GENRE,
    payload,
  }),

  resetGenre: () => ({
    type: ActionType.CHANGE_GENRE,
    payload: ALL_GENRES,
  })
};
