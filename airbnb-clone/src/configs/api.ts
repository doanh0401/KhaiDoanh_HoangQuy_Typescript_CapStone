import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { BASE_URL, TOKEN_CYB } from "../constants/api";
import { store } from "../store/config";

const state = store.getState();
const key = "USER_INFO";
const value = localStorage.getItem(key);
let Token : any = {};
if (value !== null) {
  const parsedValue: any = JSON.parse(value);
  Token = parsedValue.token;
} else {
  console.log(`${key} không tồn tại trong localStorage`);
}
const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    tokenCybersoft: TOKEN_CYB,
    token: Token,
  },
});

request.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  return config;
});

export { request };
