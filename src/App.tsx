import { useState } from 'react'
import styles from './App.module.scss'
import { Post } from './typeModules/modules'

import { PostForm } from './UI/PostForm/PostForm'
import { PostList } from './UI/PostList/PostList'

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Язык программирования' },
    { id: 2, title: 'Python', body: 'Язык программирования' },
    { id: 3, title: 'HTML', body: 'Язык программирования' },
  ])

  const createNewPost = (newPost: Post) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className={styles.app}>
      <PostForm createNewPost={createNewPost} />
      <PostList posts={posts} />
    </div>
  )
}
