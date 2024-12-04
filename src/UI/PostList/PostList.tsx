import { PostItem } from '../../components/PostItem'
import { Post } from '../../typeModules/modules'
import { memo, useEffect, useState } from 'react'

interface PostListProps {
  posts: Post[]
}

export const PostList = memo(({ posts }: PostListProps) => {
  const [message, setMessage] = useState('')
  console.log(posts, 'посты в постлисте')

  useEffect(() => {
    if (posts.length === 0) {
      const timer = setTimeout(() => setMessage('Посты не найдены'), 1000)
      return () => clearTimeout(timer)
    }
    setMessage('')
  }, [posts])

  if (posts.length > 0) {
    return (
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    )
  }

  return <h3>{message}</h3>
})
