import { useCallback, useState } from 'react'
import styles from './App.module.scss'
import { Post } from './typeModules/modules'

import { PostForm } from './UI/PostForm/PostForm'
import { PostList } from './UI/PostList/PostList'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, postTitle: 'JS', postBody: 'Язык программирования' },
    { id: 2, postTitle: 'Python', postBody: 'Язык программирования' },
    { id: 3, postTitle: 'HTML', postBody: 'Язык программирования' },
  ])

  const addNewPost = useCallback(
    (newPost: Post) => {
      setPosts([...posts, newPost])
    },
    [posts]
  )

  return (
    <div className={styles.appContainer}>
      <PostForm addNewPost={addNewPost} />
      <PostList posts={posts} />
    </div>
  )
}
