import { type } from 'os'
import { useCallback, useState } from 'react'
import { createContext } from 'react'
import styles from './App.module.scss'
import { Post } from './typeModules/modules'
import { PostForm } from './UI/PostForm/PostForm'
import { PostList } from './UI/PostList/PostList'
import { SearchInput } from './UI/SearchInput/SearchInput'
import { MySelect } from './UI/Select/MySelect'

interface ContextType {
  removePost: (id: number) => void
}

export const ContextForPosts = createContext<ContextType>({
  removePost: () => {},
})

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, postTitle: 'JS', postBody: 'ААА' },
    { id: 2, postTitle: 'Python', postBody: 'БББ' },
    { id: 3, postTitle: 'HTML', postBody: 'ЯЯЯ' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchPosts, setSearchPosts] = useState(posts)

  const addNewPost = useCallback((newPost: Post) => {
    setPosts((prev) => [...prev, newPost])
    setSearchPosts((prev) => [...prev, newPost])
  }, [])

  const removePost = useCallback((id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
  }, [])

  const sortPosts = (sort: keyof Post) => {
    setSelectedSort(sort)
    const sortedPosts = [...searchPosts].sort((a, b) => {
      if (typeof a[sort] === 'string' && typeof b[sort] === 'string') {
        return (a[sort] as string).localeCompare(b[sort] as string)
      }
      return 0
    })
    setSearchPosts(sortedPosts)
  }

  const onSearch = (searchValue: string) => {
    const filtered = posts.filter((post) => post.postTitle.toLocaleLowerCase().includes(searchValue))
    setSearchPosts(filtered)
  }

  return (
    <div className={styles.appContainer}>
      <PostForm addNewPost={addNewPost} />
      <hr className={styles.line} />
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
      <ContextForPosts.Provider value={{ removePost }}>
        <PostList posts={searchPosts} />
      </ContextForPosts.Provider>
    </div>
  )
}
