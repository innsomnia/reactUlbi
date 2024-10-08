import { PostItem } from '../../components/PostItem'
import { Post } from '../../typeModules/modules'

interface PostListProps {
  posts: Post[]
  removePost: (id: number) => void
}

export const PostList = (props: PostListProps) => {
  return (
    <div>
      {props.posts.length > 0 ? (
        props.posts.map((post, index) => (
          <PostItem
            removePost={() => props.removePost(post.id)}
            idNumber={index + 1}
            key={post.id}
            post={post}
          />
        ))
      ) : (
        <h3>Постов не найдено</h3>
      )}
    </div>
  )
}
