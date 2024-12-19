import styles from './styles.module.scss'
import { useContext } from 'react'
import { AuthContext } from '../context/context'
import { LoginRedirect } from '../components/LoginRedirect/LoginRedirect'

export const HomePage = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  return (
    <div className={styles.main}>
      {isAuth ? (
        <>
          <h1>Этот проект был написан на базе курса от Ulbi</h1>
          <p>Вы уже авторизованы :)</p>
          <button className={styles.authBtn} onClick={() => setIsAuth(false)}>
            Выйти
          </button>
        </>
      ) : (
        <>
          <h1>Этот проект был написан на базе курса от Ulbi</h1>
          <LoginRedirect />
        </>
      )}
    </div>
  )
}
