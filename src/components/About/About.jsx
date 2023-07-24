import styles from './about.module.css'
import useLanguage from '../../hooks/useLanguage'

import reactLogo from '../../assets/react-logo.png'
import reduxLogo from '../../assets/redux-icon.png'

export default function About () {
  const { dictionaryWord } = useLanguage()
  return (
    <div className={styles.container}>
      <h2>{dictionaryWord('about.about')}</h2>
      <div className={styles.group}>
        <h3>{dictionaryWord('about.subtitle')} <span><a href="https://www.soyhenry.com/" target="_blank" rel="noreferrer" >Henry</a></span>.</h3>
      </div>
      <div className={styles.group}>
        <h3>{dictionaryWord('about.tecnology')}</h3>
      </div>
      <div className={styles.group}>
          <div>
            <img className={styles.image} src={reactLogo} alt="React icon" />
            <img className={styles.image} src={reduxLogo} alt="redux icon" />
          </div>
      </div>
      <div className={styles.group}>
        <h3>{dictionaryWord('about.autor')}</h3>
      </div>
    </div>
  )
}
