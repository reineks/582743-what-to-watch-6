const DEFAULT_GENRE = `All genres`;
const FILMS_LIST_SIZE = 8;
const EXTRA_FILMS_COUNT = 4;
const MAX_STARRING = 4;
const GENRES_LIST_COUNT = 9;
const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;
const REVIEW_POST_STATUS_TIMEOUT = 5000;
const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;
const CARD_PLAYER_TIMEOUT = 1000;

const HttpCode = {
  UNAUTHORIZED: 401
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const ApiPaths = {
  FILMS: `/films`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
};

const AppPaths = {
  MAIN: `/`,
  FILM: `/films/:id`,
  LOGIN: `/login`,
  REVIEW: `/films/:id/review`,
  PLAYER: `/player/:id`,
  MY_LIST: `/mylist`,
};

const ALL_GENRES = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`
];

const TabTypes = {
  OVERVIEW: `overview`,
  DETAILS: `details`,
  REVIEWS: `reviews`
};

const TabDetails = [
  {
    type: TabTypes.OVERVIEW,
    title: `Overview`
  },
  {
    type: TabTypes.DETAILS,
    title: `Details`
  },
  {
    type: TabTypes.REVIEWS,
    title: `Reviews`
  },
];

const ReviewPostStatus = {
  LOADING: `LOADING`,
  LOADED: `LOADED`,
  ERROR: `ERROR`,
  PENDING: `PENDING`,
};

const RatingLevel = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

const ReviewParameter = {
  COMMENT_MAX_LENGTH: 400,
  COMMENT_MIN_LENGTH: 50,
  DEFAULT_RATING: 2,
};

export {
  HttpCode,
  TabTypes,
  ApiPaths,
  AppPaths,
  TabDetails,
  ALL_GENRES,
  BACKEND_URL,
  RatingLevel,
  DEFAULT_GENRE,
  MAX_STARRING,
  REQUEST_TIMEOUT,
  FILMS_LIST_SIZE,
  SECONDS_IN_HOUR,
  ReviewParameter,
  ReviewPostStatus,
  SECONDS_IN_MINUTE,
  EXTRA_FILMS_COUNT,
  GENRES_LIST_COUNT,
  CARD_PLAYER_TIMEOUT,
  AuthorizationStatus,
  REVIEW_POST_STATUS_TIMEOUT,
};
