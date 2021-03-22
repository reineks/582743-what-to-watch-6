import {ActionType} from "./action";
import films from "../mocks/films";
import {ALL_GENRES} from "../consts";

const initialState = {
  genre: ALL_GENRES,
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
  }
  return state;
};

export {reducer};
