import React, { SetStateAction } from 'react'

export interface Post {
  id: number
  title: string
  body: string
}

export interface IPostComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface Option {
  value: string
  name: string
}

export interface PostFormProps {
  addNewPost: (newPost: Post) => void
}

export type EventCreatePost = (e: React.MouseEvent<HTMLButtonElement>) => void

export interface IAuthTypes {
  isAuth: boolean
  setIsAuth: React.Dispatch<SetStateAction<boolean>>
}

export interface IModalTypes {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}
