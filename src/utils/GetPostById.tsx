import axios from 'axios'
import { Post } from '../typeModules/modules'

export const getPostById = async (id: string) => {
  const response = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return response.data
}
