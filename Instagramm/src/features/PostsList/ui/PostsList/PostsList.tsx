import { Text, VStack } from "@/shared/ui";
import cls from "./PostsList.module.scss";
import { useSelector } from "react-redux";
import {
  PostCard,
  PostCardSkeleton,
  getDataPosts,
  getPostsLoading
} from "@/entities/PostCard";

export const PostsList = () => {
  const postsData = useSelector(getDataPosts);
  const loading = useSelector(getPostsLoading);

  if (loading) {
    return (
      <VStack gap={40}>
        {[1, 2, 3, 4].map((item, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </VStack>
    );
  }

  return (
    <VStack gap={40}>
      {postsData.length > 0
        ? (
            postsData.map((post) => <PostCard key={post._id} post={post} />)
          )
        : (
        <Text>Постов пока нет</Text>
          )}
    </VStack>
  );
};
