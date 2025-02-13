import { UserCard } from "@/shared/ui"
import cls from "./PostCardHeader.module.scss"
import { EllipsisOutlined } from "@ant-design/icons"
import { type FC } from "react"
import { type PostProps } from "../../model/types/post"

export const PostCardHeader: FC<PostProps> = ({ post }) => {
  const { user } = post
  return (
    <div className={cls.header}>
        <UserCard size={34} src={user?.avatar} id={user?._id} title={user.fullname} content={user.username}>
            <EllipsisOutlined />
        </UserCard>
    </div>
  )
}
