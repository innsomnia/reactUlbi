import { useQuery } from '@tanstack/react-query'
import { postsService } from '../utils/postsService'

export const usePosts = (page: number) => {
  const query = useQuery({
    queryKey: ['posts', page],
    queryFn: () => postsService(page),
    retry: false,
  })

  return { ...query, data: query.data?.data, totalLimit: query.data?.totalLimit }
}
