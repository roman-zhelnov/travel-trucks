import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const truckApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchTrucks = createAsyncThunk(
  "fetchData",
  async ({ filters, page = 1, limit = 4 }, thunkApi) => {
    const params = new URLSearchParams({
      ...filters,
      page,
      limit,
    }).toString();
    try {
      const { data } = await truckApi.get(`/campers?${params}`);

      return data;
    } catch (error) {
      if (error.response.status === 404) {
        return thunkApi.rejectWithValue("Sorry, no such campers were found!");
      }
      return thunkApi.rejectWithValue(
        error.message || "There was an error. Please try again later."
      );
    }
  }
);

export const fetchTruckById = createAsyncThunk(
  "trucks/fetchById",
  async (id, thunkApi) => {
    try {
      const { data } = await truckApi.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
