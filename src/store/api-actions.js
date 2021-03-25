import {ActionCreator} from "./action";
import {ApiPaths} from "../consts";
import {adapter} from "../utils";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data.map(adapter.rawToFilm))))
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromo(adapter.rawToFilm(data))))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiPaths.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data.map(adapter.rawToComment))))
);
