import { ChangeEvent, useState } from 'react'
import { Button } from '../Button/Button'
import { MyInput } from '../Input/MyInput'

import styles from '../Input/MyInput.module.scss'

export const PostForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    console.log(title)
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

        <Button />
      </form>
    </div>
  )
}
