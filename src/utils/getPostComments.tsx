import axios from 'axios'
import { IPostComment } from '../typeModules/modules'

export const getPostComments = async (id: string) => {
  const response = await axios.get<IPostComment[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

  return response.data
}
