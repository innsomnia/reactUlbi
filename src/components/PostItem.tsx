import styles from './PostItem.module.scss'
import { PostItemProps } from '../typeModules/modules'

export const PostItem = ({ post }: PostItemProps) => {
  const { id, title, body } = post

  return (
    <div className={styles.postContainer}>
      <div>
        <div className={styles.postBox}>
          <h2>
            {id}. {title}
          </h2>
          <p>{body}</p>
        </div>
      </div>
      <div>
        <button className={styles.deleteBtn}>Удалить</button>
      </div>
    </div>
  )
}
