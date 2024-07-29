import React from 'react'
import styles from './PostItem.module.scss'
import { PostItemProps } from '../typeModules/modules'

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className={styles.postContainer}>
      <div>
        <div className={styles.postBox}>
          <h2>
            {post.id}. {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      </div>
      <div>
        <button className={styles.btnItem}>Удалить</button>
      </div>
    </div>
  )
}
