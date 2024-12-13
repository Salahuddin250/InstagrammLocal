import { type ThunkConfig } from "@/app/provider";
import { userActions } from "@/entities/User";
import { type User } from "@/entities/User/model/types/user";
import { type ImageUpload, imageUpload } from "@/shared/lib/imageUpload";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface updateProfileParams {
  user: User
  avatar: File
}

export const updateProfile = createAsyncThunk<
any,
updateProfileParams,
ThunkConfig<string>
>("profile/updateProfile", async (params, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  const { user, avatar } = params;

  let newAvatar: ImageUpload[] = []

  try {
    if (avatar) newAvatar = await imageUpload([avatar]);

    const newUser = { ...user, avatar: avatar ? newAvatar[0].url : user.avatar }

    const res = await extra.api.patch("/user", newUser);

    if (res.data) {
      dispatch(userActions.setUpdateUser(newUser));
    }

    return res.data;
  } catch (err: any) {
    return rejectWithValue(err.response.data.msg);
  }
});
