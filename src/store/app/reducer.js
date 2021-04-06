import {ActionType} from "./actions";
import {ALL_GENRES} from "../../consts";

const initialState = {
  genre: ALL_GENRES,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
  }
  return state;
};
