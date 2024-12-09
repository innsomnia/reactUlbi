import { useQuery } from '@tanstack/react-query'
import { PostsService } from '../utils/PostsService'

export const UsePosts = (page: number) => {
  const query = useQuery({
    queryKey: ['posts', page],
    queryFn: () => PostsService(page),
    retry: false,
  })

  return query
}
