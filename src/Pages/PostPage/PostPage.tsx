import { useParams } from 'react-router-dom'
import { usePostById } from '../../hooks/usePostById'
import styles from './styles.module.scss'
import { usePostComments } from '../../hooks/usePostComments'
import { CommentsList } from '../../components/CommentsList/CommentsList'
import { MyModal } from '../../UI/Modal/Modal'
import { useState } from 'react'

export const PostPage = () => {
  const { id } = useParams()
  const { data: post } = usePostById(id as string)
  const { data: comments } = usePostComments(id as string)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.container}>
      <h2>
        {id}. {post?.title}
      </h2>
      <p>{post?.body}</p>

      <button className={styles.openBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Закрыть комментарии' : 'Открыть комментарии'}
      </button>
      {isOpen && (
        <MyModal onClose={() => setIsOpen(false)}>
          <CommentsList comments={comments} />
        </MyModal>
      )}
    </div>
  )
}
