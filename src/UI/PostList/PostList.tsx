import { PostItem } from '../../components/PostItem'
import { Post } from '../../typeModules/modules'
import { memo } from 'react'

interface PostListProps {
  searchPosts: Post[]
}

export const PostList = memo(({ searchPosts }: PostListProps) => {
  return (
    <div>
      {searchPosts.length > 0 ? (
        <div>
          {searchPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <h3>Постов не найдено</h3>
      )}
    </div>
  )
})
