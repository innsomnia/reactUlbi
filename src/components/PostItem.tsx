import styles from './PostItem.module.scss'
import { Post } from '../typeModules/modules'

interface PostItemProps {
  post: Post
  idNumber: number
}

export const PostItem = ({ post, idNumber }: PostItemProps) => {
  const { postTitle, postBody } = post

  return (
    <div className={styles.postContainer}>
      <div>
        <div className={styles.postBox}>
          <h2>
            {idNumber}. {postTitle}
          </h2>
          <p>{postBody}</p>
        </div>
      </div>
      <div>
        <button className={styles.deleteBtn}>Удалить</button>
      </div>
    </div>
  )
}
