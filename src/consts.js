const DEFAULT_GENRE = `All genres`;
const FILMS_LIST_SIZE = 8;
const EXTRA_FILMS_COUNT = 4;
const MAX_STARRING = 4;
const GENRES_LIST_COUNT = 9;
const BACKEND_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const ApiPaths = {
  FILMS: `/films`,
  PROMO: `/films/promo`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
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

export {TabDetails, TabTypes, ApiPaths, ALL_GENRES, DEFAULT_GENRE, FILMS_LIST_SIZE, EXTRA_FILMS_COUNT, MAX_STARRING, GENRES_LIST_COUNT, REQUEST_TIMEOUT, BACKEND_URL};
