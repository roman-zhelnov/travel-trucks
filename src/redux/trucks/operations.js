import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const truckApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const fetchTrucks = createAsyncThunk(
  "fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await truckApi.get("/campers");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
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
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
