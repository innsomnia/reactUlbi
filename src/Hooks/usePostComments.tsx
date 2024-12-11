import { useQuery } from '@tanstack/react-query'
import { getPostComments } from './../utils/getPostComments'

export const usePostComments = (id: string) => {
  const query = useQuery({ queryKey: ['comments'], queryFn: () => getPostComments(id), retry: false })

  return query
}
