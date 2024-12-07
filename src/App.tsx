import { Route, Routes } from 'react-router-dom'
import { Posts } from './Pages/Posts'
import { About } from './Pages/About'
import { HomePage } from './Pages/HomePage'
import styles from './App.module.scss'
import { NavBar } from './UI/NavBar/NavBar'
import { PostPage } from './Pages/PostPage'
import { NotFound } from './Pages/NotFound/NotFound'

export const App = () => {
  return (
    <div className={styles.mainInfo}>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
