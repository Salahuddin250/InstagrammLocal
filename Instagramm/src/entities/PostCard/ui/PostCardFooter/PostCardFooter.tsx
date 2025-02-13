import { HStack, Icon, Text, VStack } from "@/shared/ui";
import cls from "./PostCardFooter.module.scss";
import { type FC } from "react";
import { type PostProps } from "../../model/types/post";
import { LikeBtn } from "@/features";

export const PostCardFooter: FC<PostProps> = ({ post }) => {
  return (
    <VStack>
      <HStack align="start" className={cls.isons}>
        <HStack align="start" gap={4}>
          <VStack max={false}>
            <LikeBtn post={post}/>
            <>{post.likes.length} likes</>
          </VStack>
          <Icon type="Comments" />
        </HStack>
        <Icon type="Bookmark" />
      </HStack>

      <HStack gap={4} align="start" className={cls.body}>
        <Text color="default" fw={600}>
          {post.user.username}:
        </Text>
        <Text as="span" size={13} fw={400} color="default">
          {post.content}
        </Text>
      </HStack>
    </VStack>
  );
};
