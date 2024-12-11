import { useParams } from 'react-router-dom'
import { usePostById } from '../../hooks/usePostById'
import styles from './styles.module.scss'
import { usePostComments } from '../../hooks/usePostComments'
import { PostComment } from '../../components/PostComment/PostComment'

export const PostPage = () => {
  const { id } = useParams()
  const { data: post } = usePostById(id as string)
  const { data: comments } = usePostComments(id as string)

  console.log(comments, 'comments')

  return (
    <div className={styles.container}>
      <h2>
        {id}. {post?.title}
      </h2>
      <p>{post?.body}</p>

      {comments?.map((comment) => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
