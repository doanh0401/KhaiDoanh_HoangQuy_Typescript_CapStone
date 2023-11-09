import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { BASE_URL, TOKEN_CYB } from "../constants/api";

const state = store.getState();

const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYB,
    token: state.userReducer.userInfo ? state.userReducer.userInfo.token : "",
  },
});

request.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {

  return config;
});

export { request };
