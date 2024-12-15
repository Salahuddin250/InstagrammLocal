import { VStack } from "@/shared/ui"
import cls from "./PostCard.module.scss"
import { PostCardHeader } from "../PostCardHeader/PostCardHeader"
import { PostCardBody } from "../PostCardBody/PostCardBody"
import { PostCardFooter } from "../PostCardFooter/PostCardFooter"

export const PostCard = () => {
  return (
    <VStack className={cls.postCard}>
        <PostCardHeader/>
        <PostCardBody/>
        <PostCardFooter/>
        <div className="comments"></div>
        <div className="addCommentInput"></div>
    </VStack>
  )
}
