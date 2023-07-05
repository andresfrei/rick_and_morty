import { useRef } from 'react'
import useCardAdd from '../../hooks/useCardAdd'

import styles from './cardAdd.module.css'
import { ImCross } from 'react-icons/im'
import { OutlineButton } from '../_theme/Buttons'
import { SearchBar } from '../_theme/ButtonBar'
import useLanguage from '../../hooks/useLanguage'

export default function CardAdd () {
  const inputRef = useRef(null)
  const { dictionaryWord } = useLanguage()
  const { handleAdd, handleRandom, handleToggle, error } = useCardAdd()

  // useEffect(() => {
  //  inputRef.current.focus()
  // }, [])

  return (
    <div className='modal-container'>
      <div className={styles.form}>
        <ImCross className={styles.btnClose} onClick={() => handleToggle(3)} />
        <h4 className={styles.title}>Agregar Personaje</h4>
          <div>
            <SearchBar
              placeholder ='by id'
              onInput = {handleAdd}
              ref = {inputRef}
            />
            {!!error &&
              <h4 className={styles.error}>
                {dictionaryWord('errors.' + error)}
              </h4>
            }
          </div>
          <OutlineButton onClick={handleRandom}>
            Randomn
          </OutlineButton>
      </div>
    </div>
  )
}
