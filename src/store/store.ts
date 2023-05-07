import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/userSlice'
import { newsSlice } from './news/newsSlice'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: userSlice.reducer,
  news: newsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

