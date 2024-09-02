export interface Post {
  id: number
  postTitle: string
  postBody: string
}

export interface Option {
  value: string
  name: string
}

export interface PostFormProps {
  addNewPost: (newPost: Post) => void
}

export type EventCreatePost = (e: React.MouseEvent<HTMLButtonElement>) => void
