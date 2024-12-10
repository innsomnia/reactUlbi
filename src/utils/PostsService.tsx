import axios from 'axios'
import { Post } from '../typeModules/modules'

export const postsService = async (page = 0) => {
  const limit = 10

  const response = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=${limit}`
  )

  const data = response.data
  const totalLimit: string = response.headers['x-total-count']

  return { data, totalLimit }
}
