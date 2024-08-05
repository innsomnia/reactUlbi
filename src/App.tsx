import { useState } from 'react'
import styles from './App.module.scss'

import { Post } from '../src/typeModules/modules'
import { PostForm } from './UI/PostForm/PostForm'
import { PostList } from './UI/PostList/PostList'

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'JS', body: 'Язык программирования' },
    { id: 2, title: 'Python', body: 'Язык программирования' },
    { id: 3, title: 'HTML', body: 'Язык программирования' },
  ])

  return (
    <div className={styles.app}>
      <PostForm />
      <PostList posts={posts} />
    </div>
  )
}
