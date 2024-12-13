import { createSlice } from "@reduxjs/toolkit";
import { type ProfileState } from "../types/profile";
import { searchUsers } from "../service/searchUsers";
import { getUserProfile } from "../service/getUserProfile";
import { updateProfile } from "../service/updateProfile";

const initialState: ProfileState = {
  posts: [],
  users: [],
  user: null,
  error: "",
  succes: "",
  loading: false,
  searchUsers: [],
  searchLoading: false
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileUser: (state, action) => {
      state.user = action.payload
    },
    setSearchUsers: (state) => {
      state.searchUsers = []
    },
    setClearMessage: (state) => {
      state.error = ""
      state.succes = ""
    },
    setUpdateFollow: (state, action) => {
      state.users = state.users.map((user) => user._id === action.payload._id ? action.payload : user)
    }
  },
  extraReducers (builder) {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.searchLoading = true
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.searchLoading = false
        state.searchUsers = action.payload
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.searchLoading = false
      })

      .addCase(getUserProfile.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false
        state.users = [...state.users, action.payload.user]
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false
      })

      .addCase(updateProfile.pending, (state) => {
        state.error = ""
        state.succes = ""
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.error = ""
        state.succes = "Успешное обновление данных"
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.error = "Ошибка при обновлении данных"
        state.succes = ""
      })
  }
})

export const profileActions = profileSlice.actions
export const profileReduser = profileSlice.reducer
