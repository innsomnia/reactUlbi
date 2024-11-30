import { useQuery } from '@tanstack/react-query'
import PostService from '../API/postService'

export const UsePosts = () => {
  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['posts'], queryFn: PostService.getAll, retry: false })

  return { posts, isLoading, isError, error }
}
