import { IPostComment } from '../../typeModules/modules'

interface ICommentProps {
  key: number
  comment: IPostComment
}

export const CommentItem = ({ comment }: ICommentProps) => {
  return (
    <>
      <h2>{comment.name}</h2>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </>
  )
}
