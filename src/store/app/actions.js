import {ALL_GENRES} from "../../consts";

export const ActionType = {
  CHANGE_GENRE: `app/changeGenre`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const resetGenre = () => ({
  type: ActionType.CHANGE_GENRE,
  payload: ALL_GENRES,
});
