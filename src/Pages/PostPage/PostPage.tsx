import { useParams } from 'react-router-dom'
import { usePostById } from '../../hooks/usePostById'
import styles from './styles.module.scss'
import { usePostComments } from '../../hooks/usePostComments'
import { CommentsList } from '../../components/CommentsList/CommentsList'
import { useState } from 'react'
import { MyModal } from '../../UI/Modal/Modal'

export const PostPage = () => {
  const { id } = useParams()
  const { data: post } = usePostById(id as string)
  const { data: comments } = usePostComments(id as string)
  const [modal, setModal] = useState(false)

  return (
    <div className={styles.container}>
      <h2>
        {id}. {post?.title}
      </h2>
      <p>{post?.body}</p>

      <button className={styles.openBtn} onClick={() => setModal(!modal)}>
        {modal ? 'Закрыть комментарии' : 'Открыть комментарии'}
      </button>
      {/* {modal && (
        <MyModal>
          <CommentsList comments={comments} />
        </MyModal>
      )} */}
    </div>
  )
}
