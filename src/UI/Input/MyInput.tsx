import styles from './MyInput.module.scss'
import { InputProps } from '../../typeModules/modules'
import { memo } from 'react'

export const MyInput = memo((props: InputProps) => {
  return <input className={styles.myInput} {...props} />
})
