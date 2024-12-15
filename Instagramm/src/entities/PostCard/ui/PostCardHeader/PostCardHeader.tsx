import { UserCard } from "@/shared/ui"
import cls from "./PostCardHeader.module.scss"
import { EllipsisOutlined } from "@ant-design/icons"

export const PostCardHeader = () => {
  return (
    <div className={cls.header}>
        <UserCard size={34} src="" id="" title="TestUser" content="">
            <EllipsisOutlined />
        </UserCard>
    </div>
  )
}
