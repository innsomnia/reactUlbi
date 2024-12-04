import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { StylesLinkType } from '../../typeModules/modules'

const getLinkStyles = ({ isActive }: StylesLinkType, styles) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link
}

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarLinks}>
        <li>
          <NavLink className={({ isActive }: StylesLinkType) => getLinkStyles({ isActive }, styles)} to={'/'}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }: StylesLinkType) => getLinkStyles({ isActive }, styles)} to={'/posts'}>
            Список постов
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }: StylesLinkType) => getLinkStyles({ isActive }, styles)} to={'/about'}>
            О нас
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
