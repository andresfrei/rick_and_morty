import styles from './lenguageSelector.module.css'

function OptionFlag ({ language, onClick }) {
  const handleclick = () => {
    onClick && onClick(language.toLowerCase())
  }

  return (
    <div className={styles.option} onClick={handleclick}>
    <img className={styles.img} src={`./assets/flags/${language}.png`} alt="language selected" />
    <p>{language.toUpperCase()}</p>
    </div>
  )
}

export default OptionFlag
