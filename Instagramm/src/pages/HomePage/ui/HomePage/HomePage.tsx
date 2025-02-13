import { getAuthData } from "@/entities/User";
import { PostsList } from "@/features";
import { HStack, VStack } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import cls from "./HomePage.module.scss";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useEffect } from "react";
import { getFetchPosts } from "../../model/service/getFetchPosts";
import { HomeStories } from "../HomeStories/HomeStories";
import { HomeSuggestions } from "../HomeSuggestions/HomeSuggestions";
import { HomeUserCard } from "../HomeUserCard/HomeUserCard";
import { getPostsInited } from "@/entities/PostCard";

export const HomePage = () => {
  const { t } = useTranslation();
  const authData = useSelector(getAuthData);
  const isInitedPosts = useSelector(getPostsInited);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isInitedPosts) {
      dispatch(getFetchPosts())
    }
  }, [isInitedPosts, dispatch])

  return (
    <HStack align="start" className={cls.home}>
      {/* left */}

      <VStack className={cls.left} gap={40}>
        <HomeStories />
        <PostsList />

        {/* <Skeleton/> */}

      </VStack>

      {/* left */}

      {/* right */}

      <VStack gap={36} className={cls.right}>

        {/* UserCard */}
          <HomeUserCard authData={authData}/>
        {/* UserCard */}

<HomeSuggestions authData={authData}/>
      </VStack>

      {/* right */}
    </HStack>
  );
};
