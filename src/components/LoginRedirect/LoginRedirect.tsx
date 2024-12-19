import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

export const LoginRedirect = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.main}>
      <p>Нажмите "Войти", чтобы перейти к просмотру постов</p>
      <button className={styles.authBtn} onClick={() => navigate('/login')}>
        Войти
      </button>
    </div>
  )
}
