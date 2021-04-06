import {NameSpace} from "../reducer";

export const getAuthorizationError = (state) => state[NameSpace.USER].authorizationError;
export const getIsAuthorized = (state) => !!state[NameSpace.USER].userAuthorizationInfo;
