import './App.scss'

import { PostItem } from './components/PostItem'

export const App = () => {
  return (
    <div className='App'>
      <h1>Мои посты</h1>
      <PostItem />
    </div>
  )
}
