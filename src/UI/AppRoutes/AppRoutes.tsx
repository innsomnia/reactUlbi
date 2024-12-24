import { Route, Routes } from 'react-router-dom'
import styles from '../../App.module.scss'
import { NavBar } from '../NavBar/NavBar'
import { privateRoutes, publicRoutes } from '../../routes/routes'
import { useContext } from 'react'
import { AuthContext } from '../../context/context'

export const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <div className={styles.mainInfo}>
      <NavBar />
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)
          : publicRoutes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}
      </Routes>
    </div>
  )
}
