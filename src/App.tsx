import { useCallback, useState } from 'react'
import styles from './App.module.scss'
import { Post } from './typeModules/modules'

import { PostForm } from './UI/PostForm/PostForm'
import { PostList } from './UI/PostList/PostList'
import { MySelect } from './UI/Select/MySelect'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, postTitle: 'JS', postBody: 'Язык программирования' },
    { id: 2, postTitle: 'Python', postBody: 'Язык программирования' },
    { id: 3, postTitle: 'HTML', postBody: 'Язык программирования' },
  ])

  const addNewPost = useCallback((newPost: Post) => {
    setPosts((prev) => [...prev, newPost])
  }, [])

  const removePost = useCallback((id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
  }, [])

  return (
    <div className={styles.appContainer}>
      <PostForm addNewPost={addNewPost} />
      <hr className={styles.line} />
      <MySelect
        defaultValue={'Сортировка по:'}
        options={[
          { value: 'postTitle', name: 'По названию' },
          { value: 'postBody', name: 'По описанию' },
        ]}
      />
      <PostList posts={posts} removePost={removePost} />
    </div>
  )
}
