import { type ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { type User } from "@/entities/User/model/types/user";
import { LOCAL_STORAGE_TOKEN } from "@/shared/consts/localstorage";

interface GetFetchLoginData {
  user: User
  token: string
}

export const getFetchAuthUser = createAsyncThunk<any, void, ThunkConfig<string>>(
  "user/getAuthUser",
  async (params, thunkApi) => {
    const { extra, rejectWithValue, dispatch } = thunkApi;

    try {
      const res = await extra.api.post<GetFetchLoginData>("/refresh_token");
      if (res.data) {
        dispatch(userActions.setAuthData(res.data));
        localStorage.setItem(LOCAL_STORAGE_TOKEN, res.data.token);
      }
    } catch (err: any) {
      return rejectWithValue(err.response.data.msg);
    }
  }
);
