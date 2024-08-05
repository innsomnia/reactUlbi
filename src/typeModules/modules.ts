import { ChangeEvent } from 'react'

export interface Post {
  id: number
  title: string
  body: string
}

export interface PostItemProps {
  post: Post
}

export interface InputProps {
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type: string
  placeholder: string
}

export interface PostListProps {
  posts: Post[]
}
