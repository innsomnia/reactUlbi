import { About } from '../Pages/About'
import { HomePage } from '../Pages/HomePage'
import { NotFound } from '../Pages/NotFound/NotFound'
import { PostPage } from '../Pages/PostPage/PostPage'
import { Posts } from '../Pages/Posts'

export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <About /> },
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:id', element: <PostPage /> },
  { path: '*', element: <NotFound /> },
]
