import React, { useState } from 'react'
import './App.scss'
import { PostItem } from './components/PostItem'

export const App: React.FC = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Язык программирования' },
    { id: 2, title: 'CSS', body: 'Для стилизация приложения' },
  ])

  return (
    <div className='App'>
      <h1>Мои посты</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
