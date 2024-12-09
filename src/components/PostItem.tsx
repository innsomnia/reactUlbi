import styles from './PostItem.module.scss'
import { Post } from '../typeModules/modules'
import { ContextForPosts } from '../Pages/Posts'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

interface PostItemProps {
  props: Post
}

export const PostItem = ({ props }: PostItemProps) => {
  const { removePost } = useContext(ContextForPosts)
  const { id, title, body } = props

  const navigate = useNavigate()
  return (
    <div className={styles.postContainer}>
      <div className={styles.postText}>
        <div className={styles.postBox}>
          <h2>
            {id}. {title}
          </h2>
          <p>{body}</p>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button onClick={() => navigate(`/posts/${id}`)} className={styles.postBtn}>
          Открыть
        </button>
        <button onClick={() => removePost(id)} className={styles.postBtn}>
          Удалить
        </button>
      </div>
    </div>
  )
}
