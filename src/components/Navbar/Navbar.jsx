import Logo from '../Logo/Logo'
import styles from './navbar.module.css'
import LenguageSelector from '../LanguageSelector/LenguageSelector'
import { NavigationButton } from '../_theme/Buttons'
import { FaUserAlt } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import useSession from '../../hooks/useSession'

const GITHUB_REPO_URL = 'https://github.com/andresfrei/rick_and_morty'

const Navbar = () => {
  const { session } = useSession()
  const handleGitHub = () => window.open(GITHUB_REPO_URL, '_blank')
  return (
    <nav className={styles.container}>
        <div>
          <Logo/>
        </div>
        <div className={styles.toolBar}>
          <LenguageSelector />
          <NavigationButton width='50px' onClick={handleGitHub}>
            <BsGithub/>
          </NavigationButton>
          {session?.user?.emai &&
            <NavigationButton width='50px'>
              <FaUserAlt/>
            </NavigationButton>
          }
        </div>
    </nav>
  )
}

export default Navbar
