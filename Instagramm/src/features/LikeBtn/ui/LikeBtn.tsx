import { Icon } from "@/shared/ui";
import cls from "./LikeBtn.module.scss";
import { type FC, useState, useEffect } from "react";
import { likePost, unLikePost, type Post } from "@/entities/PostCard";
import { type User } from "@/entities/User/model/types/user";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { type Mods, classNames } from "@/shared/lib/classNames";

interface LikeBtnProps {
  post: Post
}

export const LikeBtn: FC<LikeBtnProps> = ({ post }) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const auth = useSelector(getAuthData);
  const dispatch = useAppDispatch();

  const onIsLike = async () => {
    setIsLike(true);
    setIsLoad(true);
    await dispatch(likePost({ post, auth }));
    setIsLoad(false);
  };
  const onUnLike = async () => {
    setIsLike(false);
    setIsLoad(true);
    await dispatch(unLikePost({ post, auth }));
    setIsLoad(false);
  };

  useEffect(() => {
    if (post.likes.find((item) => item._id === auth._id)) {
      setIsLike(true);
    }
    return () => {
      setIsLike(false);
    };
  }, [post.likes, auth._id]);

  const mods: Mods = {
    [cls.disabled]: isLoad
  }
  return (
    <>
      {isLike
        ? (
        <Icon type="FavoriteFilled" onClick={onUnLike} className={classNames(cls.like, mods, [])} />
          )
        : (
        <Icon type="Favorite" onClick={onIsLike} className={classNames(cls.like, mods, [])} />
          )}
    </>
  );
};
