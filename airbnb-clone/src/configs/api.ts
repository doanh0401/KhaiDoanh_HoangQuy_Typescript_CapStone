import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { BASE_URL, TOKEN_CYB } from "../constants/api";

const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYB,
  },
});

request.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {

  return config;
});

export { request };
