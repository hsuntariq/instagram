import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/posts/postSlice";
export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
