import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Post } from '../typeModules/modules'

const postService = async (page = 0) => {
  const limit = 10

  const response = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=${limit}`
  )

  return response.data
}

// const getPageById = async (id: number) => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)

//   return
// }

export const UsePosts = (page: number) => {
  const query = useQuery({
    queryKey: ['posts', page],
    queryFn: () => postService(page),
    retry: false,
  })

  return query
}
