import { useNavigate, useRouteError } from 'react-router-dom'
import { OutlineButton } from '../_theme/Buttons'

import styles from './error.module.css'
import useLanguage from '../../hooks/useLanguage'
import { useEffect, useRef } from 'react'

const Error = () => {
  const { dictionaryWord } = useLanguage()
  const error = useRouteError()
  const navigate = useNavigate()
  const handleHome = () => navigate(-1)

  const defaultFocus = useRef(null)

  useEffect(() => {
    defaultFocus.current.focus()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.message}>
      <h1 className={styles.status}>{error.status}</h1>
      <h4 className={styles.text}>{error.statusText}</h4>
      <OutlineButton
        onClick={handleHome}
        ref={defaultFocus}
      >
        {dictionaryWord('errors.back')}
      </OutlineButton>
      </div>
    </div>
  )
}

export default Error
