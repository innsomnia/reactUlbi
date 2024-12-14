import { createContext, useCallback, useEffect, useState } from 'react'
import { Post } from '../typeModules/modules'
import styles from '../App.module.scss'
import { MyModal } from '../UI/Modal/Modal'
import { PostFilter } from '../UI/PostFilter/PostFilter'
import { PostList } from '../UI/PostList/PostList'
import { PostForm } from '../UI/PostForm/PostForm'
import { usePosts } from '../hooks/usePosts'
import { Loader } from '../UI/Loader/Loader'

interface ContextType {
  removePost: (id: number) => void
}

export const ContextForPosts = createContext<ContextType>({
  removePost: () => {},
})

export const Posts = () => {
  const [page, setPage] = useState(0)
  const { data: posts, isLoading } = usePosts(page)
  const [selectedSort, setSelectedSort] = useState('')
  const [searchPosts, setSearchPosts] = useState(posts || [])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (posts) {
      setSearchPosts(posts)
    }
  }, [posts])

  const addNewPost = useCallback((newPost: Post) => {
    setSearchPosts((prev) => [...prev, newPost])
    setIsOpen(false)
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
    const filtered = posts?.filter((post: Post) => post.title.toLowerCase().includes(searchValue))

    if (filtered) {
      setSearchPosts(filtered)
    }
  }

  const nextPage = () => {
    setPage((prev) => prev + 1)
  }

  const prevPage = () => {
    setPage(page > 0 ? (prev) => prev - 1 : 0)
  }

  return (
    <div className={styles.appContainer}>
      <h1>Мои посты</h1>

      <button className={styles.createBtn} onClick={() => setIsOpen(true)}>
        Создать пост
      </button>

      {isOpen && (
        <MyModal onClose={() => setIsOpen(false)}>
          <PostForm addNewPost={addNewPost} />
        </MyModal>
      )}

      <hr className={styles.line} />

      <PostFilter selectedSort={selectedSort} sortPosts={sortPosts} onSearch={onSearch} />

      <div className={styles.pagesBtn}>
        <button className={styles.button} onClick={prevPage}>
          Предыдущая
        </button>
        <button className={styles.button} onClick={nextPage} disabled={page === 9}>
          Следующая
        </button>
        <span className={styles.numberPage}>Страница: {page + 1}</span>
      </div>

      <ContextForPosts.Provider value={{ removePost }}>
        {isLoading ? <Loader /> : <PostList searchPosts={searchPosts} />}
      </ContextForPosts.Provider>
    </div>
  )
}
