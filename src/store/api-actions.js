import {ActionCreator} from "./action";
import {ApiPaths, AuthorizationStatus} from "../consts";
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

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiPaths.LOGIN, {email, password})
    .then((response) => dispatch(ActionCreator.loggedIn(response.data.email, response.data.avatar_url)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

export const checkAuthNo = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.NO_AUTH)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);
