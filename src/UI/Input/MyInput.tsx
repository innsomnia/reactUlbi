import styles from './MyInput.module.scss'
import { InputProps } from '../../typeModules/modules'

export const MyInput = (props: InputProps) => {
  return <input className={styles.myInput} {...props} />
}
