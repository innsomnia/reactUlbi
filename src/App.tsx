import { Navigate, Route, Routes } from 'react-router-dom'
import { Posts } from './Pages/Posts'
import { About } from './Pages/About'
import { HomePage } from './Pages/HomePage'
import styles from './App.module.scss'

export const App = () => {
  return (
    <div className={styles.mainInfo}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='*' element={<Navigate to={'/posts'} />} />
      </Routes>
    </div>
  )
}
