import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postsReducer from "./postsSlice";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    posts: postsReducer,
  },
});
