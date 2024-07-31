import { useState } from 'react'
import styles from './App.module.scss'
import { PostItem } from './components/PostItem'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Язык программирования' },
    { id: 2, title: 'CSS', body: 'Для стилизация приложения' },
  ])

  return (
    <div className={styles.app}>
      <h1>Мои посты</h1>

      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
