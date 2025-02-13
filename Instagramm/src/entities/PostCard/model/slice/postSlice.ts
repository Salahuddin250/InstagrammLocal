import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type Post, type PostState } from "../types/post";
import {
  type GetFetchPosts,
  getFetchPosts
} from "@/pages/HomePage/model/service/getFetchPosts";

const initialState: PostState = {
  loading: false,
  posts: [],
  resultPosts: 0,
  error: "",
  inited: false
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    setCreatePost: (state, action: PayloadAction<Post>) => {
      state.posts = [action.payload, ...state.posts];
    },
    setUpdatePost: (state, action: PayloadAction<Post>) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    }
  },
  extraReducers (builder) {
    builder
      .addCase(getFetchPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getFetchPosts.fulfilled,
        (state, action: PayloadAction<GetFetchPosts>) => {
          state.loading = false;
          state.posts = action.payload.posts;
          state.resultPosts = action.payload.result;
          state.inited = true;
        }
      )
      .addCase(getFetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const PostActions = postSlice.actions;
export const PostReduser = postSlice.reducer;
