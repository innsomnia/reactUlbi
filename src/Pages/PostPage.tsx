import { useParams } from 'react-router-dom'
import { UsePostById } from '../Hooks/UsePostById'
import styles from '../components/PostItem.module.scss'

export const PostPage = () => {
  const { id } = useParams()

  const changedTypeOfId = Number(id)

  const { data: post } = UsePostById(changedTypeOfId)

  return (
    <div className={styles.postContainer}>
      <div className={styles.postText}>
        <div className={styles.postBox}>
          <h2>
            {id}. {post?.title}
          </h2>
          <p>{post?.body}</p>
        </div>
      </div>
    </div>
  )
}
