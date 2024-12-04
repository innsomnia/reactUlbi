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

export type StylesLinkType = {
  isActive: boolean
}

declare module './NavBar.module.scss' {
  export const navBar: string
  export const navBarLinks: string
  export const link: string
  export const active: string
  export const navBarLink: string
}
