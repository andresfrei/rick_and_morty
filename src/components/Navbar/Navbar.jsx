import Logo from '../Logo/Logo'
import styles from './navbar.module.css'
import LenguageSelector from '../LanguageSelector/LenguageSelector'
import { NavigationButton } from '../_theme/Buttons'
import { BsGithub } from 'react-icons/bs'
import useSession from '../../hooks/useSession'
import SessionMenu from '../SessionMenu/SessionMenu'
import { useNavigate } from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'

const GITHUB_REPO_URL = 'https://github.com/andresfrei/rick_and_morty'

export default function Navbar () {
  const { hasLogged } = useSession()
  const navigate = useNavigate()
  const handleGitHub = () => window.open(GITHUB_REPO_URL, '_blank')
  const { dictionaryWord } = useLanguage()
  const urlNavigation = hasLogged ? '/home' : '/'
  const textNavigation = hasLogged ? 'nav.home' : 'nav.landing'
  return (
    <nav className={styles.container}>
        <div>
          <Logo/>
        </div>
        <div className={styles.group} >
          <NavigationButton width='120px' onClick={() => navigate(urlNavigation)}>
              {dictionaryWord(textNavigation)}
            </NavigationButton>
          <NavigationButton width='120px' onClick={() => navigate('/about')}>
            {dictionaryWord('nav.about')}
          </NavigationButton>
          <NavigationButton width='50px' onClick={handleGitHub}>
            <BsGithub/>
          </NavigationButton>
          <LenguageSelector />
          {hasLogged && <SessionMenu /> }
        </div>
    </nav>
  )
}
