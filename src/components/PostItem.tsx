import styles from './PostItem.module.scss'
import { Post } from '../typeModules/modules'
import { ContextForPosts } from '../App'
import { useContext } from 'react'

interface PostItemProps {
  post: Post
  idNumber: number
}

export const PostItem = ({ post, idNumber }: PostItemProps) => {
  const { removePost } = useContext(ContextForPosts)
  const { title, body } = post

  return (
    <div className={styles.postContainer}>
      <div>
        <div className={styles.postBox}>
          <h2>
            {idNumber}. {title}
          </h2>
          <p>{body}</p>
        </div>
      </div>
      <div>
        <button onClick={() => removePost(post.id)} className={styles.deleteBtn}>
          Удалить
        </button>
      </div>
    </div>
  )
}
