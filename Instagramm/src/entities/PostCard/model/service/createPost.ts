import { type ThunkConfig } from "@/app/provider";
import { imageUpload, type ImageUpload } from "@/shared/lib/imageUpload";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostActions } from "../slice/postSlice";
import { type Post } from "../types/post";
interface createPostParams {
  content: string
  images: File[]
}

interface GetParamsCreatePost {
  newPost: Post
}
export const createPost = createAsyncThunk<any, createPostParams, ThunkConfig<string>>(
  "post/create",
  async (params, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi
    const { images, content } = params

    try {
      let newImages: ImageUpload[] = []

      if (images.length > 0) newImages = await imageUpload(images)

      const { data } = await extra.api.post<GetParamsCreatePost>("posts", { content, images: newImages })

      dispatch(PostActions.setCreatePost(data.newPost))
    } catch (err) {
      return rejectWithValue(err.response.data.msg)
    }
  }
);
