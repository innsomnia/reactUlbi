interface Post {
  id: number
  title: string
  body: string
}

export interface PostItemProps {
  post: Post
}

export interface InputProps {
  type: string
  placeholder: string
}
