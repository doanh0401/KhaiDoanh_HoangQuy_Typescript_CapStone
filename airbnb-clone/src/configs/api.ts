import axios, { AxiosInstance } from "axios";
import { BASE_URL, TOKEN_CYB } from "../constants/api";

const request: AxiosInstance  = axios.create({
    baseURL: BASE_URL,
    headers: {
        TokenCybersoft: TOKEN_CYB,  
    }
});
console.log(BASE_URL);

export { request };