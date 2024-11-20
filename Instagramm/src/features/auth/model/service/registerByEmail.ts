import { type ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const registerByEmail = createAsyncThunk<any, any, ThunkConfig<string>>(
  "auth/register",
  async (userData, thunkApi) => {
    const { getState, extra, rejectWithValue, dispatch } = thunkApi;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        userData
      );
    } catch (err: any) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);
