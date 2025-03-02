import { createSlice } from "@reduxjs/toolkit";
import { fetchTruckById, fetchTrucks } from "./operations.js";

const initialState = {
  items: [],
  total: 0,
  filters: {
    location: "",
    AC: false,
    transmission: "",
    kitchen: false,
    TV: false,
    bathroom: false,
    form: "",
  },
  currentPage: 1,
  truckItem: null,
  isLoad: false,
  isError: null,
};

const slice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload.items];
        state.total = action.payload.total;
        state.isLoad = false;
        state.isError = null;
      })
      .addCase(fetchTrucks.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(fetchTrucks.rejected, (state) => {
        state.isLoad = false;
        state.isError = true;
      })
      .addCase(fetchTruckById.fulfilled, (state, action) => {
        state.truckItem = action.payload;
        state.isLoad = false;
      })
      .addCase(fetchTruckById.pending, (state) => {
        state.isLoad = true;
      });
  },
});

export const trucksReducer = slice.reducer;

export const { setFilters, setCurrentPage } = slice.actions;

export const selectTrucks = (state) => state.trucks.items;
export const selectTotal = (state) => state.trucks.total;
export const selectTruckItem = (state) => state.trucks.truckItem;
export const selectIsLoading = (state) => state.trucks.isLoad;
export const selectIsError = (state) => state.trucks.isError;
export const selectFilters = (state) => state.trucks.filters;
export const selectCurrentPage = (state) => state.trucks.currentPage;
