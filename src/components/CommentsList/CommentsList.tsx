import { IPostComment } from '../../typeModules/modules'
import { CommentItem } from '../CommentItem/CommentItem'

interface IPostCommentProps {
  comments?: IPostComment[]
}

export const CommentsList = ({ comments }: IPostCommentProps) => {
  return (
    <>
      {comments?.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </>
  )
}
