import {ActionType} from "./action";
import {ALL_GENRES, AuthorizationStatus} from "../consts";

const initialState = {
  genre: ALL_GENRES,
  films: [],
  reviews: [],
  promo: {},
  isDataLoaded: {films: false, promo: false},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {
    email: null,
    avatar: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: {...state.isDataLoaded, films: true}
      };

    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promo: action.payload,
        isDataLoaded: {...state.isDataLoaded, promo: true}
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.LOGGED_IN:
      return {
        ...state,
        user: {
          email: action.payload.email,
          avatar: action.payload.avatar
        }
      };
  }
  return state;
};

export {reducer};
