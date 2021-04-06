import {setUserInfo, setAuthorizationError} from "./actions";
import {loadFavorites} from "../data/actions";
import {redirectToRoute} from "../middlewares/actions";
import {ApiPaths, AppPaths} from "../../consts";
import {dataToUserInfo} from "../../utils";

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.LOGIN)
    .then(({data}) => dispatch(setUserInfo(dataToUserInfo(data))))
    .catch(() => {})
);
export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(ApiPaths.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setUserInfo(dataToUserInfo(data)));
      dispatch(setAuthorizationError(false));
      dispatch(redirectToRoute(AppPaths.MAIN));
    })
    .catch(() => dispatch(setAuthorizationError(true)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.LOGOUT)
    .then(() => {
      dispatch(setUserInfo(null));
      dispatch(loadFavorites([]));
      dispatch(redirectToRoute(AppPaths.MAIN));
    })
    .catch(() => {})
);
