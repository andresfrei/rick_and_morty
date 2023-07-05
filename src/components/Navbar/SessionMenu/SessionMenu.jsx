import { FaUserAlt } from 'react-icons/fa'
import useLanguage from '../../../hooks/useLanguage'
import { NavigationButton } from '../../_theme/Buttons'
import styles from './sessionMenu.module.css'
import { BsGear } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import useToggle from '../../../hooks/useToggle'

const SessionMenu = () => {
  const { dictionaryWord } = useLanguage()
  const { isToggle, handleToggle } = useToggle()
  const handleUser = () => window.alert('Cosme fulanito todavía no se puede configurar')
  return (
    <div className={styles.container}>
      <div className={styles.selectbox} onClick={() => handleToggle(2)}>
        <NavigationButton width='50px'>
          <FaUserAlt/>
        </NavigationButton>
      </div>
      {isToggle(2) &&
        <div className={styles.options} onClick={() => handleToggle(2)}>
          <div className={styles.option} onClick={handleUser}>
            <h4 >{dictionaryWord('session.options')}</h4>
            <BsGear/>
          </div>
          <div className={styles.option}>
            <h4 className={styles.text}>{dictionaryWord('session.close')}</h4>
            <IoClose/>
          </div>
        </div>
      }
    </div>
  )
}

export default SessionMenu

/*       <div className={styles.relative}>
        <NavigationButton width='50px' onClick={() => handleToggle(!toggle)}>
          <FaUserAlt/>
        </NavigationButton>
      </div>
      { toggle &&
        <div className={styles.options}>
        <h4 className={styles.option}>{username}</h4>
        <h4 className={styles.option}>{dictionaryWord('session.close')}</h4>
      </div>} */
