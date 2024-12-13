// ui
export { ProfileInfo } from "./ui/ProfileInfo/ProfileInfo"
export { ProfilePost } from "./ui/ProfilePosts/ProfilePosts"
export { EditProfile } from "./ui/EditProfile/EditProfile"

// types
export type { ProfileState } from "./model/types/profile"
export { FollowEnum } from "./model/types/profile"

// slice
export { profileActions, profileReduser } from "./model/slice/profileSlice"

// selectors
export { getProfileUser } from "./model/selectors/getProfileUser"
export { getSearchUsers } from "./model/selectors/getSearchUsers"
export { getSearchLoading } from "./model/selectors/getSearchLoading"
export { getProfileUsers } from "./model/selectors/getProfileUsers"
export { getProfileUserLoading } from "./model/selectors/getProfileUserLoading"
export { getProfileError } from "./model/selectors/getProfileError"
export { getProfileSucces } from "./model/selectors/getProfileSucces"

// service
export { searchUsers } from "./model/service/searchUsers"
export { getUserProfile } from "./model/service/getUserProfile"
export { updateProfile } from "./model/service/updateProfile"
export { followUser } from "./model/service/follow"
export { unfollowUser } from "./model/service/unfollow"
