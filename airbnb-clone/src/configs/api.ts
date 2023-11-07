import axios, { AxiosInstance } from "axios";
import { BASE_URL, TOKEN_CYB } from "../constants/api";
import { store } from "../store/config";

const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYB,
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
