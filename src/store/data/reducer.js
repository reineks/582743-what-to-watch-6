import {ActionType} from "./actions";
import {ReviewPostStatus} from "../../consts";

const initialState = {
  films: [],
  promo: {},
  favorites: [],
  isDataLoaded: {films: false, promo: false},
  reviewPostStatus: ReviewPostStatus.PENDING,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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

    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };

    case ActionType.SET_REVIEW_POST_STATUS:
      return {
        ...state,
        reviewPostStatus: action.payload,
      };
  }
  return state;
};
