import {ActionType} from "./action";
import films from "../mocks/films";
import {ALL_GENRES} from "../consts";

const initialState = {
  genre: ALL_GENRES,
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_FILMS:
      return {
        ...state,
        films: initialState.films
      };

    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
  }
  return state;
};

export {reducer};
