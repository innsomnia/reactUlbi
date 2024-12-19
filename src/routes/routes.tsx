import { LoginRedirect } from '../components/LoginRedirect/LoginRedirect'
import { About } from '../Pages/About'
import { HomePage } from '../Pages/HomePage'
import { LoginPage } from '../Pages/LoginPage/LoginPage'
import { NotFound } from '../Pages/NotFound/NotFound'
import { PostPage } from '../Pages/PostPage/PostPage'
import { Posts } from '../Pages/Posts'

export const privateRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <About /> },
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:id', element: <PostPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '*', element: <NotFound /> },
]

export const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <About /> },
  { path: '/posts', element: <LoginRedirect /> },
  { path: '/login', element: <LoginPage /> },
  { path: '*', element: <NotFound /> },
]
