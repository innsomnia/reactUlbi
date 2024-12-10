import { useQuery } from '@tanstack/react-query'
import { getPostById } from '../utils/getPostById'

export const usePostById = (id: string) => {
  const query = useQuery({ queryKey: ['post'], queryFn: () => getPostById(id), retry: false })

  return query
}
