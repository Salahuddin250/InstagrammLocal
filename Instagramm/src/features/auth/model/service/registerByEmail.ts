import { type ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerByEmail = createAsyncThunk<any, any, ThunkConfig<string>>(
  "auth/register",
  async (userData, thunkApi) => {
    const { getState, extra, rejectWithValue, dispatch } = thunkApi;

    try {
      const res = await extra.api.post("/register", userData)
    } catch (err: any) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);
