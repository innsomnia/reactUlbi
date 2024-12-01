import { useCallback, useEffect, useState } from 'react'
import { createContext } from 'react'
import styles from './App.module.scss'
import { Post } from './typeModules/modules'
import { Loader } from './UI/Loader/Loader'
import { MyModal } from './UI/Modal/Modal'
import { PostFilter } from './UI/PostFilter/PostFilter'
import { PostForm } from './UI/PostForm/PostForm'
import { PostList } from './UI/PostList/PostList'
import { UsePosts } from './Hooks/usePosts'
import axios from 'axios'

interface ContextType {
  removePost: (id: number) => void
}

export const ContextForPosts = createContext<ContextType>({
  removePost: () => {},
})

export const App = () => {
  const { posts, isLoading, isError, error } = UsePosts()
  const [selectedSort, setSelectedSort] = useState('')
  const [searchPosts, setSearchPosts] = useState(posts)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    setSearchPosts(posts)
  }, [posts])

  const addNewPost = useCallback((newPost: Post) => {
    setSearchPosts((prev: Post[]) => [...prev, newPost])
    setModal(false)
  }, [])

  const removePost = useCallback((id: number) => {
    setSearchPosts((prevPosts: Post[]) => prevPosts.filter((post) => post.id !== id))
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
    const filtered = posts.filter((post: Post) => post.title.toLowerCase().includes(searchValue))
    setSearchPosts(filtered)
  }

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    if (axios.isAxiosError(error)) {
      return (
        <div>
          <h2>Произошла ошибка!</h2>
          <p>Текст ошибки: {error.message}</p>
          <p>Код ошибки: {error.response?.status}</p>
        </div>
      )
    }
  }

  return (
    <div className={styles.appContainer}>
      <h1>Мои посты</h1>

      <button className={styles.createBtn} onClick={() => setModal(true)}>
        Создать пост
      </button>
      {modal && (
        <MyModal>
          <PostForm setModal={() => setModal(false)} addNewPost={addNewPost} />
        </MyModal>
      )}
      <hr className={styles.line} />
      <PostFilter selectedSort={selectedSort} sortPosts={sortPosts} onSearch={onSearch} />
      <ContextForPosts.Provider value={{ removePost }}>
        <PostList posts={searchPosts} />
      </ContextForPosts.Provider>
    </div>
  )
}
