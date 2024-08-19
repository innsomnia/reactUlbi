import { ChangeEvent } from 'react'

export interface Post {
  id: number
  postTitle: string
  postBody: string
}

export interface InputProps {
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type: string
  placeholder: string
}

export interface PostFormProps {
  addNewPost: (newPost: Post) => void
}

export type EventCreatePost = (e: React.MouseEvent<HTMLButtonElement>) => void
