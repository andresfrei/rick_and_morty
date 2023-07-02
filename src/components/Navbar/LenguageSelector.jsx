import { useState } from 'react'
import OptionFlag from './OptionFlag'
import styles from './lenguageSelector.module.css'
import { FaAngleDown } from 'react-icons/fa'
import useLanguage from '../../hooks/useLanguage'

const LanguageSelector = () => {
  const [toggle, setToggle] = useState(false)
  const { selected } = useLanguage()
  const handleClick = () => setToggle(!toggle)
  const toggleClass = toggle ? styles.options : styles.displayNone
  return (
    <div className={styles.container}>
      <div className={styles.selectbox} onClick={handleClick}>
          <div className={styles.selected}>
              <OptionFlag language={selected}/>
              <FaAngleDown/>
          </div>
          <div className={toggleClass}>
            <div className={styles.optionContainer}>
              <OptionFlag language={'es'} />
            </div>
            <div className={styles.optionContainer}>
              <OptionFlag language={'en'} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default LanguageSelector
