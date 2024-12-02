import { useQuery } from '@tanstack/react-query'
// import PostService from '../API/postService'
import axios from 'axios'
import { useState } from 'react'

const postService = async (page = 0) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=10`)

  return response.data
}

export const UsePosts = () => {
  const [page, setPage] = useState(0)
  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ['posts', page], queryFn: () => postService(page), retry: false })
  console.log(page, 'page в usePosts')
  return { posts, isLoading, isError, error }
}
