import styles from './MySelect.module.scss'
import { Option } from '../../typeModules/modules'

interface SelectOptions {
  options: Option[]
  defaultValue: string
}

export const MySelect = ({ options, defaultValue }: SelectOptions) => {
  return (
    <div className={styles.selectContainer}>
      <select className={styles.sectionSelect}>
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
