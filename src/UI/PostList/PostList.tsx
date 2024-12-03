import { PostItem } from '../../components/PostItem'
import { Post } from '../../typeModules/modules'
import { memo, useEffect, useState } from 'react'

interface PostListProps {
  posts: Post[]
}

export const PostList = memo(({ posts }: PostListProps) => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (posts.length === 0) {
      const timer = setTimeout(() => setMessage('Посты не найдены'), 600)
      return () => clearTimeout(timer)
    }
    setMessage('')
  }, [posts])

  if (posts.length > 0) {
    return (
      <div>
        {posts.map((post, index) => (
          <PostItem idNumber={index + 1} key={post.id} post={post} />
        ))}
      </div>
    )
  }

  return <h3>{message}</h3>
})
