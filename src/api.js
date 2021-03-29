import axios from "axios";
import {BACKEND_URL, REQUEST_TIMEOUT, HttpCode} from "./consts";

export const createApi = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    const {response} = error;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();

      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
