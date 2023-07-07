import { useNavigate } from 'react-router-dom'
import useLanguage from '../../hooks/useLanguage'
import Logo from '../Logo/Logo'
import { OutlineButton } from '../_theme/Buttons'
import styles from './welcome.module.css'

export default function Welcome () {
  const { dictionaryWord } = useLanguage()
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
        <div>
          <img className={styles.image}src="./assets/rick_and_morty.png" alt="Rick and Morty website" />
        </div>
        <div className={styles.detail}>
          <div className={styles.data}>
            <h1 style={{ fontSize: 35 }} >{dictionaryWord('about.welcome')}</h1>
            <h1 >{dictionaryWord('about.to')}</h1>
            <Logo/>
            <h5 style={{ paddingTop: 20 }} >{dictionaryWord('about.subtitle')}</h5>
          </div>
          <OutlineButton
            height='50px'
            onClick={() => navigate('/login')}
          >
            {dictionaryWord('about.go')}
          </OutlineButton>
        </div>
    </div>
  )
}
