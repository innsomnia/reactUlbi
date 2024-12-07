import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { Loader } from '../UI/Loader/Loader'

const postService = async (page = 0) => {
  const limit = 10

  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=${limit}`)

  return response.data
}

const getPageById = async (id: number) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)

  return
}

export const UsePosts = () => {
  const [page, setPage] = useState(0)
  const {
    data: posts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => postService(page),
    placeholderData: [],
    retry: false,
  })

  const nextPage = () => {
    setPage((prev) => prev + 1)
  }

  const prevPage = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const LoaderComponent = isLoading ? <Loader /> : null

  const ErrorComponent =
    isError && axios.isAxiosError(error) ? (
      <div>
        <h2>Произошла ошибка!</h2>
        <p>Текст ошибки: {error.message}</p>
        <p>Код ошибки: {error.response?.status}</p>
      </div>
    ) : null

  return { posts, LoaderComponent, ErrorComponent, page, nextPage, prevPage }
}
