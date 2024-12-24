import { useContext } from 'react'
import { MyInput } from '../../UI/Input/MyInput'
import styles from './styles.module.scss'
import { AuthContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const { setIsAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const authConfirmFnc = () => {
    setIsAuth(true)
    navigate('/posts')
  }

  return (
    <div>
      <h1>Авторизация:</h1>
      <div className={styles.inputsContainer}>
        <MyInput type='' placeholder='Логин...' />
        <MyInput type='' placeholder='Пароль...' />
      </div>
      <button className={styles.btn} onClick={() => authConfirmFnc()}>
        Войти
      </button>
    </div>
  )
}