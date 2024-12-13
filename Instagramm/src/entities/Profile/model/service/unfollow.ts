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

export const unfollowUser = createAsyncThunk<
any,
followParams,
ThunkConfig<string>
>("profile/unfollowUser", async (params, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  const { user, auth } = params;

  //   console.log(user, auth.);

  try {
    const newUser = {
      ...user, followers: user.followers.filter((item) => item._id !== auth._id)
    }

    dispatch(profileActions.setUpdateFollow(newUser))

    dispatch(userActions.setUpdateUser({
      ...auth,
      following: auth.following.filter((item) => item._id !== user._id)
    }))

    await extra.api.patch(`/user/${user._id}/unfollow`);
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg);
  }
});
