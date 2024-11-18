import { createSlice } from "@reduxjs/toolkit";
import { type AuthState } from "../types/auth";

const initialState: AuthState = {
  loading: false,
  error: ""
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading: (state, action) => {
      return (state.loading = action.payload)
    }
  }
})

export const authActions = authSlice.actions;
export const authReduser = authSlice.reducer;
