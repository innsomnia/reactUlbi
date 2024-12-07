import styles from './PostItem.module.scss'
import { Post } from '../typeModules/modules'
import { ContextForPosts } from '../Pages/Posts'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

interface PostItemProps {
  post: Post
}

export const PostItem = ({ post }: PostItemProps) => {
  const { removePost } = useContext(ContextForPosts)
  const { id, title, body } = post

  const navigate = useNavigate()
  return (
    <div className={styles.postContainer}>
      <div className={styles.postText}>
        <div className={styles.postBox}>
          <h2>
            {post.id}. {title}
          </h2>
          <p>{body}</p>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button onClick={() => navigate(`/posts/${id}`)} className={styles.openBtn}>
          Открыть
        </button>
        <button onClick={() => removePost(post.id)} className={styles.deleteBtn}>
          Удалить
        </button>
      </div>
    </div>
  )
}
