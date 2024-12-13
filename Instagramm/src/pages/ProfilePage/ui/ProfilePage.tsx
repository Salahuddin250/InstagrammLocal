import { ProfileInfo, getProfileUsers, getUserProfile } from "@/entities/Profile";
import cls from "./ProfilePage.module.scss";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const profileUsers = useSelector(getProfileUsers)

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (profileUsers.every((user) => user._id !== id)) {
      dispatch(getUserProfile({ id }));
    }
  }, [id, dispatch, profileUsers]);

  return (
    <div>
      <ProfileInfo id={id} users={profileUsers}/>
    </div>
  );
};
export default ProfilePage;
