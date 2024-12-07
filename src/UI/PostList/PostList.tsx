import { PostItem } from '../../components/PostItem'
import { Post } from '../../typeModules/modules'
import { memo } from 'react'

interface PostListProps {
  posts: Post[]
}

export const PostList = memo(({ posts }: PostListProps) => {
  return (
    <div>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <h3>Постов не найдено</h3>
      )}
    </div>
  )
})
