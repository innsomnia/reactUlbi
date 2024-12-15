import { IPostComment } from '../../typeModules/modules'
import styles from './styles.module.scss'

interface ICommentProps {
  key: number
  comment: IPostComment
}

export const CommentItem = ({ comment }: ICommentProps) => {
  return (
    <div>
      <div className={styles.comment}>
        <h2>{comment.email}</h2>
        <p>{comment.body}</p>
      </div>
    </div>
  )
}
