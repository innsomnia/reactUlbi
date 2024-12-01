export interface Post {
  id: number
  title: string
  body: string
}

export interface Option {
  value: string
  name: string
}

export interface PostFormProps {
  addNewPost: (newPost: Post) => void
  setModal: () => void
}

export type EventCreatePost = (e: React.MouseEvent<HTMLButtonElement>) => void
