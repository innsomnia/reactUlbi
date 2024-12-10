import { useParams } from 'react-router-dom'
import { usePostById } from '../../hooks/UsePostById'
import styles from './styles.module.scss'

export const PostPage = () => {
  const { id } = useParams()

  const { data: post } = usePostById(id as string)

  return (
    <div className={styles.container}>
      <h2>
        {id}. {post?.title}
      </h2>
      <p>{post?.body}</p>
    </div>
  )
}
