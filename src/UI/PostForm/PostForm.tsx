import { ChangeEvent, useState } from 'react'
import { PostFormProps, EventCreatePost } from '../../typeModules/modules'
import { MyInput } from '../Input/MyInput'

import styles from './PostForm.module.scss'

export const PostForm = (props: PostFormProps) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { createNewPost } = props

  const createPost: EventCreatePost = (e) => {
    e.preventDefault()
    const newPost = { id: Date.now(), title, body }
    createNewPost(newPost)
    setTitle('')
    setBody('')
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value)
  }

  return (
    <div>
      <h1>Мои посты</h1>
      <form className={styles.formInputs}>
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
        <button onClick={createPost} className={styles.createBtn}>
          Создать пост
        </button>
      </form>
    </div>
  )
}
