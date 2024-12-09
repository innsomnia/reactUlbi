import { useQuery } from '@tanstack/react-query'
import { GetPostById } from '../utils/GetPostById'

export const UsePostById = (id: number) => {
  const query = useQuery({ queryKey: ['post'], queryFn: () => GetPostById(id), retry: false })

  return query
}
