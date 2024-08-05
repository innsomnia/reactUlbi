import { PostItem } from '../../components/PostItem'
import { PostListProps } from '../../typeModules/modules'

export const PostList = (props: PostListProps) => {
  console.log(props)

  return (
    <>
      {props.posts.length > 0 ? (
        props.posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <h3>Постов не найдено</h3>
      )}
    </>
  )
}
