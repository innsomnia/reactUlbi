import styles from './MySelect.module.scss'
import { Option } from '../../typeModules/modules'
import { Post } from '../../typeModules/modules'

interface SelectOptions {
  options: Option[]
  defaultValue: string
  value: string
  onChange: (value: keyof Post) => void
}

export const MySelect = ({ options, defaultValue, value, onChange }: SelectOptions) => {
  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.sectionSelect}
        value={value}
        onChange={(event) => onChange(event.target.value as keyof Post)}>
        <option disabled value=''>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
