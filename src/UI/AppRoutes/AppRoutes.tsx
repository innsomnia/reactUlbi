import { Route, Routes } from 'react-router-dom'
import styles from '../../App.module.scss'
import { NavBar } from '../NavBar/NavBar'
import { privateRoutes, publicRoutes } from '../../routes/routes'
import { MyModal } from '../Modal/Modal'
import { useContext } from 'react'
import { AuthContext, ModalContext } from '../../context/context'

export const AppRoutes = () => {
  const { isAuth } = useContext(AuthContext)
  const { setIsOpen } = useContext(ModalContext)

  return (
    <div className={styles.mainInfo}>
      <NavBar />
      <Routes>
        {isAuth
          ? privateRoutes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)
          : publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.path === '/login' ? (
                    <MyModal onClose={() => setIsOpen(false)}>{route.element}</MyModal>
                  ) : (
                    route.element
                  )
                }
              />
            ))}
      </Routes>
    </div>
  )
}
