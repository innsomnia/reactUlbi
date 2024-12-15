import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { NavBar } from './UI/NavBar/NavBar'
import { routes } from './routes/routes'

export const App = () => {
  return (
    <div className={styles.mainInfo}>
      <NavBar />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  )
}
