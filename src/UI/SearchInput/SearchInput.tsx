import styles from '../Input/MyInput.module.scss'

interface searchOptions {
  onChange: (value: string) => void
}

export const SearchInput = ({ onChange }: searchOptions) => {
  return (
    <input
      className={styles.myInput}
      placeholder='Поиск...'
      onChange={(search) => onChange(search.target.value)}></input>
  )
}
