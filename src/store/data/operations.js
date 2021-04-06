import {loadFilms, loadPromo, loadFavorites, setReviewPostStatus, loadComments} from "./actions";
import {ApiPaths, ReviewPostStatus, REVIEW_POST_STATUS_TIMEOUT} from "../../consts";
import {redirectToRoute} from "../middlewares/actions";
import {adapter} from "../../utils";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.FILMS)
    .then(({data}) => dispatch(loadFilms(data.map(adapter.rawToFilm))))
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.PROMO)
    .then(({data}) => dispatch(loadPromo(adapter.rawToFilm(data))))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiPaths.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadComments(data.map(adapter.rawToComment))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.FAVORITE)
    .then(({data}) => dispatch(loadFavorites(data.map(adapter.rawToFilm))))
);

export const sendReview = (id, rating, comment) => (dispatch, _getState, api) => {
  dispatch(setReviewPostStatus(ReviewPostStatus.LOADING));
  return api.post(`${ApiPaths.COMMENTS}/${id}`, {comment, rating})
    .then(() => {
      dispatch(setReviewPostStatus(ReviewPostStatus.LOADED));
      dispatch(redirectToRoute(`${ApiPaths.FILMS}/${id}`));
    })
    .catch(() => dispatch(setReviewPostStatus(ReviewPostStatus.ERROR)))
    .finally(() => {
      setTimeout(() => dispatch(setReviewPostStatus(ReviewPostStatus.PENDING)), REVIEW_POST_STATUS_TIMEOUT);
    });
};

export const addToFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`${ApiPaths.FAVORITE}/${id}/${Number(status)}`)
    .then(() => dispatch(fetchFavorites()))
);
