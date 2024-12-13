import { type ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { type User } from "@/entities/User/model/types/user";
import { type ImageUpload, imageUpload } from "@/shared/lib/imageUpload";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileActions } from "../slice/profileSlice";

interface followParams {
  user: User
  auth: User
}

export const followUser = createAsyncThunk<
any,
followParams,
ThunkConfig<string>
>("profile/followUser", async (params, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  const { user, auth } = params;

  try {
    const newUser = {
      ...user, followers: [...user.followers, auth]
    }

    dispatch(profileActions.setUpdateFollow(newUser))

    dispatch(userActions.setUpdateUser({
      ...auth,
      following: [...auth.following, user]
    }))

    await extra.api.patch(`/user/${user._id}/follow`);
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg);
  }
});
