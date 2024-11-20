import { type UserState } from "@/entities/User";
import { type AuthState } from "@/features/auth";

export interface StateSchema {
  auth: AuthState
  user: UserState
}
export interface ThunkConfig<T> {
  rejectValue: T
  extra: any
  state: StateSchema
}
