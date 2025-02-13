import { type ThunkConfig } from "@/app/provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { type Post } from "../types/post";
import { type User } from "@/entities/User/model/types/user";
import { PostActions } from "../slice/postSlice";
interface likePostParams {
  post: Post
  auth: User
}
export const unLikePost = createAsyncThunk<any, likePostParams, ThunkConfig<string>>(
  "post/unlike",
  async (params, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi
    const { post, auth } = params

    const newPost = { ...post, likes: post.likes.filter((item) => item._id !== auth._id) }
    dispatch(PostActions.setUpdatePost(newPost))

    try {
      await extra.api.patch(`/post/${post._id}/unlike`)
    } catch (err) {
      return rejectWithValue(err.response.data.msg)
    }
  }
);
