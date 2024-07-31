import { useState } from 'react'
import styles from './App.module.scss'
import { PostItem } from './components/PostItem'
import { Button } from './UI/Button/Button'
import { MyInput } from './UI/Input/MyInput'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Язык программирования' },
    { id: 2, title: 'CSS', body: 'Для стилизация приложения' },
  ])

  return (
    <div className={styles.app}>
      <h1>Мои посты</h1>
      <form className={styles.fromInputs}>
        <MyInput type='text' placeholder='Введи заголовок...' />
        <MyInput type='text' placeholder='Введи описание...' />
        <Button />
      </form>

      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
