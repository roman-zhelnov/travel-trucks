import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucks/slice.js";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
  },
});
