import { useNavigate } from 'react-router-dom'

import styles from './NotFound.module.scss'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.errorContainer}>
        <h3>Страница не найдена</h3>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </div>
  )
}
