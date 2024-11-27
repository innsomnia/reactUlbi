import { ChangeEvent, useState } from 'react'
import { PostFormProps, EventCreatePost } from '../../typeModules/modules'
import { MyInput } from '../Input/MyInput'
import { memo, useCallback } from 'react'

import styles from './PostForm.module.scss'

export const PostForm = memo(({ addNewPost }: PostFormProps) => {
  const [title, setPostTitle] = useState('')
  const [body, setPostBody] = useState('')

  const handlePostCreation: EventCreatePost = useCallback(
    (e) => {
      e.preventDefault()
      const newPost = { id: Date.now(), title, body }
      addNewPost(newPost)
      setPostTitle('')
      setPostBody('')
    },
    [addNewPost, title, body]
  )

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value)
  }, [])

  const handleBodyChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPostBody(e.target.value)
  }, [])

  return (
    <div>
      <form className={styles.formInputs}>
        <MyInput value={title} onChange={handleTitleChange} type='text' placeholder='Введи заголовок...' />

        <MyInput value={body} onChange={handleBodyChange} type='text' placeholder='Введи описание...' />
        <button onClick={handlePostCreation} className={styles.createBtn}>
          Создать
        </button>
      </form>
    </div>
  )
})
