import Logo from '../Logo/Logo'
import styles from './navbar.module.css'
import LenguageSelector from './LenguageSelector'
import { NavigationButton } from '../_theme/Buttons'
import { FaUserAlt } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const GITHUB_REPO_URL = 'https://github.com/andresfrei/rick_and_morty'

const Navbar = () => {
  const handleGitHub = () => window.open(GITHUB_REPO_URL, '_blank')
  return (
    <nav >
      <div className={styles.container}>
        <Logo/>
        <div className={styles.toolBar}>
          <LenguageSelector />
          <NavigationButton width='50px' onClick={handleGitHub}>
            <BsGithub/>
          </NavigationButton>
          <NavigationButton width='50px'>
            <FaUserAlt/>
          </NavigationButton>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
