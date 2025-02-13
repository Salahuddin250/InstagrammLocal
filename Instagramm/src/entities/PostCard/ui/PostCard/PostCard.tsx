import { VStack } from "@/shared/ui"
import cls from "./PostCard.module.scss"
import { PostCardHeader } from "../PostCardHeader/PostCardHeader"
import { PostCardBody } from "../PostCardBody/PostCardBody"
import { PostCardFooter } from "../PostCardFooter/PostCardFooter"
import { type PostProps, type Post } from "../../model/types/post"
import { type FC } from "react"

export const PostCard: FC<PostProps> = ({ post }) => {
  return (
    <VStack className={cls.postCard}>
        <PostCardHeader post={post}/>
        <PostCardBody post={post}/>
        <PostCardFooter post={post}/>
        <div className="comments"></div>
        <div className="addCommentInput"></div>
    </VStack>
  )
}
