import { type User } from "@/entities/User/model/types/user";
import { type ImageUpload } from "@/shared/lib/imageUpload";

export interface Post {
  comments: string[]
  content: string
  createdAt: string
  images: ImageUpload[]
  likes: User[]
  updatedAt: string
  user: User
  __v: number
  _id: string
}

export interface PostState {
  loading: boolean
  posts: Post[]
  resultPosts: number
  error: string
  inited: boolean
}
export interface PostProps {
  post: Post
}
