import { useState } from 'react'
import styles from './App.module.scss'
import { PostItem } from './components/PostItem'
import { Button } from './UI/Button/Button'
import { MyInput } from './UI/Input/MyInput'
import { Post } from '../src/typeModules/modules'

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'JS', body: 'Язык программирования' },
  ])

  return (
    <div className={styles.app}>
      <h1>Мои посты</h1>
      <form className={styles.fromInputs}>
        <MyInput type='text' placeholder='Введи заголовок...' />
        <MyInput type='text' placeholder='Введи описание...' />
        <Button />
      </form>

      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <h3>Постов не найдено</h3>
      )}
    </div>
  )
}
