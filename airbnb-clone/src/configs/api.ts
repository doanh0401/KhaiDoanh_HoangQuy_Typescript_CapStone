import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { BASE_URL, TOKEN_CYB } from "../constants/api";
import { store } from "../store/config";

const state = store.getState();

const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYB,
    token: state.userReducer.userInfo ? state.userReducer.userInfo.token : "",
  },
});

request.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  const state = store.getState();

  let accessToken = null;

  if (state.userReducer.userInfo) {
    accessToken = state.userReducer.userInfo.accessToken;
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export { request };
