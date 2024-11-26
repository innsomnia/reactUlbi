import { ChangeEvent, useState } from 'react'
import { PostFormProps, EventCreatePost } from '../../typeModules/modules'
import { MyInput } from '../Input/MyInput'
import { memo, useCallback } from 'react'

import styles from './PostForm.module.scss'

export const PostForm = memo(({ addNewPost }: PostFormProps) => {
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const handlePostCreation: EventCreatePost = useCallback(
    (e) => {
      e.preventDefault()
      const newPost = { id: Date.now(), postTitle, postBody }
      addNewPost(newPost)
      setPostTitle('')
      setPostBody('')
    },
    [addNewPost, postTitle, postBody]
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
        <MyInput value={postTitle} onChange={handleTitleChange} type='text' placeholder='Введи заголовок...' />

        <MyInput value={postBody} onChange={handleBodyChange} type='text' placeholder='Введи описание...' />
        <button onClick={handlePostCreation} className={styles.createBtn}>
          Создать
        </button>
      </form>
    </div>
  )
})
