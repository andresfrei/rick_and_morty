import useLanguage from '../../hooks/useLanguage'
import styles from './lenguageSelector.module.css'

function OptionFlag ({ language }) {
  const { setLanguage } = useLanguage()
  const handleClick = () => setLanguage(language.toLowerCase())
  return (
    <div className={styles.option} onClick={handleClick}>
    <img className={styles.img} src={`./assets/flags/${language}.png`} alt="language selected" />
    <p>{language.toUpperCase()}</p>
    </div>
  )
}

export default OptionFlag
