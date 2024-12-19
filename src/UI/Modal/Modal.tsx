import { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

interface childrenType {
  children: ReactNode
  onClose: () => void
}

export const MyModal = ({ onClose, children }: childrenType) => {
  const portalRoot = document.getElementById('portal-root') as HTMLElement

  return ReactDOM.createPortal(
    <div onClick={onClose} className={styles.overlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div>{children}</div>
        <button className={styles.modalBtn} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>,
    portalRoot
  )
}
