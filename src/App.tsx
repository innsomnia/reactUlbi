import { AuthContext, ModalContext } from './context/context'
import { useState } from 'react'
import { AppRoutes } from './UI/AppRoutes/AppRoutes'

export const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
          <AppRoutes />
        </ModalContext.Provider>
      </AuthContext.Provider>
    </>
  )
}
