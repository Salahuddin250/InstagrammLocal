import { VStack } from "@/shared/ui"
import cls from "./PostsList.module.scss"
import { PostCard } from "@/entities"

export const PostsList = () => {
  return (
    <VStack><PostCard/></VStack>
  )
}
