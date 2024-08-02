import { useState, ChangeEvent } from 'react'
import styles from './App.module.scss'
import { PostItem } from './components/PostItem'
import { Button } from './UI/Button/Button'
import { MyInput } from './UI/Input/MyInput'
import { Post } from '../src/typeModules/modules'

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'JS', body: 'Язык программирования' },
    { id: 2, title: 'Python', body: 'Язык программирования' },
    { id: 3, title: 'HTML', body: 'Язык программирования' },
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    console.log(title)
  }

  const handleBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value)
    console.log(body, 12312)
  }

  return (
    <div className={styles.app}>
      <h1>Мои посты</h1>
      <form className={styles.fromInputs}>
        <MyInput
          value={title}
          onChange={handleTitleChange}
          type='text'
          placeholder='Введи заголовок...'
        />

        <MyInput
          value={body}
          onChange={handleBodyChange}
          type='text'
          placeholder='Введи описание...'
        />

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
