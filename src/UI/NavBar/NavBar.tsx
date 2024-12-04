import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'

// const getLinkStyles = ({ isActive }: StylesLinkType, styles: Record<string, string>) => {
//   return isActive ? `${styles.link} ${styles.active}` : styles.link
// }

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarLinks}>
        <li className={styles.navBarLink}>
          <Link to={'/'}>Главная</Link>
        </li>
        <li className={styles.navBarLink}>
          <Link to={'/posts'}>Список постов</Link>
        </li>
        <li className={styles.navBarLink}>
          <Link to={'/about'}>О нас</Link>
        </li>
      </ul>
    </nav>
  )
}
