import { type ProfileState } from "@/entities/Profile";
import { type UserState } from "@/entities/User";
import { type AuthState } from "@/features/auth";
import { type AxiosInstance } from "axios";

export interface StateSchema {
  auth: AuthState
  user: UserState
  profile: ProfileState
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
