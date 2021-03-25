import axios from "axios";
import {BACKEND_URL, REQUEST_TIMEOUT} from "./consts";

export const createApi = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  return api;
};
