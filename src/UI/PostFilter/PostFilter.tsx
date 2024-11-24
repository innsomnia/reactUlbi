import styles from '../../App.module.scss'
import { MySelect } from '../Select/MySelect'
import { SearchInput } from './../SearchInput/SearchInput'
import { Post } from '../../typeModules/modules'

interface filterProps {
  sortPosts: (sort: keyof Post) => void
  selectedSort: string
  onSearch: (searchValue: string) => void
}

export const PostFilter = (propsOfFilter: filterProps) => {
  const { sortPosts, selectedSort, onSearch } = propsOfFilter
  return (
    <div className={styles.searchContainer}>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={'Сортировка по:'}
        options={[
          { value: 'postTitle', name: 'По названию' },
          { value: 'postBody', name: 'По описанию' },
        ]}
      />
      <SearchInput onChange={onSearch} />
    </div>
  )
}
