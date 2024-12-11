import { IPostComment } from '../../typeModules/modules'

interface IPostCommentProps {
  comment: IPostComment
}

export const PostComment = ({ comment }: IPostCommentProps) => {
  return (
    <>
      <h2>Имя: {comment.name} </h2>
      <p>Комментарий: {comment.body}</p>
    </>
  )
}
