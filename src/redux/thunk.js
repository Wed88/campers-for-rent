import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCampers } from '../services/mockapiAPI';

export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async (params, thunkAPI) => {
    try {
      const response = await getAllCampers(
        params?.page,
        params?.limit,
        params?.location
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
