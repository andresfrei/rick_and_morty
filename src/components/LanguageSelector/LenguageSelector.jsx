import OptionFlag from './OptionFlag'
import styles from './lenguageSelector.module.css'
import { FaAngleDown } from 'react-icons/fa'
import useLanguage from '../../hooks/useLanguage'
import useToggle from '../../hooks/useToggle'

const LanguageSelector = () => {
  const { isToggle, handleToggle } = useToggle()
  const { selected, setLanguage } = useLanguage()
  const handleClick = () => handleToggle(1)
  return (
    <div className={styles.container}>
      <div className={styles.selectbox} onClick={handleClick}>
          <div className={styles.selected}>
              <OptionFlag language={selected}/>
              <FaAngleDown/>
          </div>
          { isToggle(1) &&
            <div className={styles.options}>
              <div className={styles.optionContainer}>
                <OptionFlag language={'es'} onClick = {setLanguage} />
              </div>
              <div className={styles.optionContainer}>
                <OptionFlag language={'en'} onClick = {setLanguage}/>
              </div>
            </div>
          }
      </div>
    </div>
  )
}

export default LanguageSelector
