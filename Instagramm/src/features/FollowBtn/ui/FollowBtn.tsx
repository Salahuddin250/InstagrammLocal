import { type FC, useState, useEffect } from "react";
import cls from "./FollowBtn.module.scss";
import { Button } from "antd";
import { type User } from "@/entities/User/model/types/user";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { followUser, unfollowUser } from "@/entities/Profile";

interface FollowBtnProps {
  user: User
  id: string
}

export const FollowBtn: FC<FollowBtnProps> = (props) => {
  const { user, id } = props
  const dispatch = useAppDispatch()
  const [follow, setFollow] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false)

  const authData = useSelector(getAuthData)

  const onFollow = async () => {
    if (load) return

    setLoad(true)
    await dispatch(followUser({ user, auth: authData }))
    setLoad(false)
  };
  const unFollow = async () => {
    setLoad(true)
    await dispatch(unfollowUser({ user, auth: authData }))
    setLoad(false)
  };
  useEffect(() => {
    if (authData?.following.find((item) => item._id === user._id)) {
      setFollow(true)
    }

    console.log(follow);

    return () => { setFollow(false); };
  }, [authData.following, id])

  return (
    <>
      {follow
        ? (
        <Button danger onClick={unFollow} type="primary" disabled={load}>
          Отписаться
        </Button>
          )
        : (
        <Button onClick={onFollow} type="primary" disabled={load}>
          Подписаться
        </Button>
          )}
    </>
  );
};
