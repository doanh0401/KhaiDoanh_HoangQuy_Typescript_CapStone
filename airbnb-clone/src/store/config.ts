import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./reducers/userReducer";
import { roomReducer } from "./reducers/roomReducer";
import { adminReducer } from "./reducers/adminReducer";

const rootReducer = combineReducers({
    userReducer: userReducer,
    roomReducer: roomReducer,
    adminReducer: adminReducer,
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