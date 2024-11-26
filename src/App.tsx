import { useCallback, useState } from 'react'
import { createContext } from 'react'
import styles from './App.module.scss'
import { Post } from './typeModules/modules'
import { MyModal } from './UI/Modal/Modal'
import { PostFilter } from './UI/PostFilter/PostFilter'
import { PostForm } from './UI/PostForm/PostForm'
import { PostList } from './UI/PostList/PostList'

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
  const [modal, setModal] = useState(false)

  const addNewPost = useCallback((newPost: Post) => {
    setPosts((prev) => [...prev, newPost])
    setSearchPosts((prev) => [...prev, newPost])
    setModal(false)
  }, [])

  const removePost = useCallback((id: number) => {
    setSearchPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
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
    const filtered = posts.filter((post) => post.postTitle.toLowerCase().includes(searchValue))
    setSearchPosts(filtered)
  }

  return (
    <div className={styles.appContainer}>
      <h1>Мои посты</h1>
      <button className={styles.createBtn} onClick={() => setModal(true)}>
        Создать пост
      </button>
      {modal ? (
        <MyModal>
          <PostForm addNewPost={addNewPost} />
        </MyModal>
      ) : (
        ''
      )}
      <hr className={styles.line} />
      <PostFilter selectedSort={selectedSort} sortPosts={sortPosts} onSearch={onSearch} />
      <ContextForPosts.Provider value={{ removePost }}>
        <PostList posts={searchPosts} />
      </ContextForPosts.Provider>
    </div>
  )
}
