import Logo from '../Logo/Logo'
import styles from './navbar.module.css'
import LenguageSelector from '../LenguageSelector/LenguageSelector'
import { NavigationButton } from '../_theme/Buttons'
import { FaUserAlt } from 'react-icons/fa'

const Navbar = ({ dictionary }) => {
  return (
    <nav >
      <div className={styles.container}>
        <Logo/>
        <div className={styles.toolBar}>
          <LenguageSelector dictionary = {dictionary}/>
          <NavigationButton width='50px'>
            <FaUserAlt/>
          </NavigationButton>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
