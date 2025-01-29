import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "./operations.js";

const initialState = {
  items: [],
  isLoad: false,
  isError: null,
};

const slice = createSlice({
  name: "trucks",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTrucks.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });
  },
});

export const trucksReducer = slice.reducer;

export const selectTrucks = (state) => state.trucks.items;
export const selectIsLoading = (state) => state.trucks.isLoad;
export const selectIsError = (state) => state.trucks.isError;
