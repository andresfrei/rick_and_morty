import styles from './errorModal.module.css'
import { OutlineButton } from '../_theme/Buttons'
import useLanguage from '../../hooks/useLanguage'

const ErrorModal = ({ handleClick }) => {
  const { dictionaryWord } = useLanguage()
  return (
    <div className='modal-container cursor-default'>
      <div className={styles.form}>
          <img className={styles.image} src="./assets/noLogin.gif" alt="Error login" />
          <h3>{dictionaryWord('login.unauthorized')}</h3>
        <OutlineButton
          color='black'
          background = 'grey'
          onClick={handleClick}
        >
          Cerrar
        </OutlineButton>
      </div>
    </div>
  )
}

export default ErrorModal
