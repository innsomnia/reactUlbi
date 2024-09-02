import styles from './MyInput.module.scss'
import { ChangeEvent } from 'react'
import { memo } from 'react'

interface InputProps {
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type: string
  placeholder: string
}

export const MyInput = memo((props: InputProps) => {
  return <input className={styles.myInput} {...props} />
})
