import styles from './lenguageSelector.module.css'

function OptionFlag ({ language, setSelectedLanguage }) {
  const handleClick = () => setSelectedLanguage && setSelectedLanguage(language)
  return (
    <div className={styles.option} onClick={handleClick}>
    <img className={styles.img} src={`./assets/flags/${language}.png`} alt="language selected" />
    <p>{language.toUpperCase()}</p>
    </div>
  )
}

export default OptionFlag
