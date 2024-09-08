import { PostItem } from '../../components/PostItem'
import { Post } from '../../typeModules/modules'
import { memo } from 'react'

interface PostListProps {
  posts: Post[]
}

export const PostList = memo((props: PostListProps) => {
  return (
    <div>
      {props.posts.length > 0 ? (
        props.posts.map((post, index) => (
          <PostItem idNumber={index + 1} key={post.id} post={post} />
        ))
      ) : (
        <h3>Постов не найдено</h3>
      )}
    </div>
  )
})
