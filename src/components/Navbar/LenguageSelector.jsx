import { useState } from 'react'
import OptionFlag from './OptionFlag'
import styles from './lenguageSelector.module.css'
import { FaAngleDown } from 'react-icons/fa'

const LanguageSelector = ({ dictionary }) => {
  const [toggle, setToggle] = useState(false)
  const { selectedLanguage, setSelectedLanguage } = dictionary
  const handleClick = () => setToggle(!toggle)
  const toggleClass = toggle ? styles.options : styles.displayNone
  return (
    <div className={styles.container}>
      <div className={styles.selectbox} onClick={handleClick}>
          <div className={styles.selected}>
              <OptionFlag language={selectedLanguage}/>
              <FaAngleDown/>
          </div>
          <div className={toggleClass}>
            <div className={styles.optionContainer}>
              <OptionFlag language={'es'} setSelectedLanguage = {setSelectedLanguage}/>
            </div>
            <div className={styles.optionContainer}>
              <OptionFlag language={'en'} setSelectedLanguage = {setSelectedLanguage}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default LanguageSelector
