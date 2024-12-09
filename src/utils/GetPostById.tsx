import axios from 'axios'

export const GetPostById = async (id: number) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)

  return response.data
}
