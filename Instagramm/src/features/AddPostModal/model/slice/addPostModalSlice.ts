import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type AddPostModalState } from "../types";

const initialState: AddPostModalState = {
  isOpen: false
}

const addPostModalSlice = createSlice({
  name: "addPostModal",
  initialState,
  reducers: {
    setIsAddPostModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    }
  }
})

export const addPostModalActions = addPostModalSlice.actions
export const addPostModalReduser = addPostModalSlice.reducer
