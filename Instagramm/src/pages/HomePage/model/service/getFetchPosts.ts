import { type ThunkConfig } from "@/app/provider";
import { type Post } from "@/entities/PostCard";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface GetFetchPosts {
  posts: Post[]
  msg: string
  result: number
}
export const getFetchPosts = createAsyncThunk<any, void, ThunkConfig<string>>(
  "post/getPosts",
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const { data } = await extra.api.get<GetFetchPosts>("posts")

      return data
    } catch (err) {
      return rejectWithValue(err.response.data.msg)
    }
  }
);
