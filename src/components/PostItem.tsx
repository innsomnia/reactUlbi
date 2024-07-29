import styles from './PostItem.module.scss'

export const PostItem = () => {
  return (
    <div className={styles.postContainer}>
      <div>
        <div className={styles.postBox}>
          <h2>1. JS</h2>
          <p>JavaScript - язык программирования</p>
        </div>
      </div>
      <div>
        <button className={styles.btnItem}>Удалить</button>
      </div>
    </div>
  )
}
