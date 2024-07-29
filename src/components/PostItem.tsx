import styles from './PostItem.module.css'

export const PostItem = () => {
  return (
    <div>
      <h1 className={styles.titlePosts}>Мои посты</h1>
      <div className={styles.postBox}>
        <div>
          <h2>1. JS</h2>
          <p>JavaScript - язык программирования</p>
        </div>
        <div>
          <button className={styles.btn}>Удалить</button>
        </div>
      </div>
    </div>
  )
}
