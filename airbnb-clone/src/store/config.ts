import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./reducers/userReducer";
import { roomReducer } from "./reducers/roomReducer";

const rootReducer = combineReducers({
    userReducer: userReducer,
    roomReducer: roomReducer
});

export const store = configureStore({
    reducer: persistReducer({
        key: 'root',
        storage,
        whitelist: ["xucXacReducer"],
    }, rootReducer),
    devTools:true,
    middleware: (config) => config({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;