import { type ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { type Post } from "../types/post";
import { type User } from "@/entities/User/model/types/user";
import { PostActions } from "../slice/postSlice";
interface likePostParams {
  post: Post
  auth: User
}
export const likePost = createAsyncThunk<any, likePostParams, ThunkConfig<string>>(
  "post/like",
  async (params, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi
    const { post, auth } = params

    const newPost = { ...post, likes: [...post.likes, auth] }
    dispatch(PostActions.setUpdatePost(newPost))

    try {
      await extra.api.patch(`/post/${post._id}/like`)
    } catch (err) {
      return rejectWithValue(err.response.data.msg)
    }
  }
);
