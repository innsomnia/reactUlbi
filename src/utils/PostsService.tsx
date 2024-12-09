import axios from 'axios'
import { Post } from '../typeModules/modules'

export const PostsService = async (page = 0) => {
  const limit = 10

  const response = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=${limit}`
  )

  return response.data
}
