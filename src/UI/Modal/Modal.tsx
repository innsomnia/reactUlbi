import { ReactNode } from 'react'
import styles from './Modal.module.scss'

interface childrenType {
  children: ReactNode
}

export const MyModal = ({ children }: childrenType) => {
  const modalStyles = `${styles.modalBackground} ${styles.active}`
  return (
    <div className={modalStyles}>
      <div className={styles.modalContent}>{children}</div>
    </div>
  )
}
