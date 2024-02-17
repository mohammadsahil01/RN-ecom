import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/CartSlice';
import { combineReducers } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
// @ts-ignore
import persistReducer from "redux-persist/es/persistReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

// @ts-ignore


let persistConfig={
  key:"root",
  storage:AsyncStorage,
  version:1

}
let rootreducer = combineReducers({
  cart: cartReducer,
})

// @ts-ignore
let persistedReducer = persistReducer(persistConfig,rootreducer)

export const store = configureStore({
  reducer:persistedReducer,
  //@ts-ignore
  middleware:(getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
});

export type RootState = ReturnType<typeof store.getState>;





