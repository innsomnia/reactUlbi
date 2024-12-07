import { useParams } from 'react-router-dom'

export const PostPage = () => {
  const params = useParams()

  return <h1>Страница поста: {params.id}</h1>
}
