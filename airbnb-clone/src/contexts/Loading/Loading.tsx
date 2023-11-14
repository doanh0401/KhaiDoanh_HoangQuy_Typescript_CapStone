import { createContext, useState } from "react"
import loading from "../../assets/img/loading.gif"
import "./Loading.scss"

const DEFAULT_STATE = {
  isLoading: false,
}

export const LoadingContext = createContext(DEFAULT_STATE);
