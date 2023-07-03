import styles from './formLogin.module.css'
import useSession from '../../hooks/useSession'
import { useEffect, useRef, useState } from 'react'
import { Form, FormHeader, FormFooter, FormInput, FromLabel, FormGrup, InputGrup } from '../_theme/Forms'
import { OutlineButton } from '../_theme/Buttons'
import useLanguage from '../../hooks/useLanguage'
import { colorSecundary } from '../../config/colors'
import ErrorModal from '../ErrorModal/ErrorModal'

const FormLogin = () => {
  const [showModal, setShowModal] = useState(false)
  const [passport, setPassport] = useState({ email: '', password: '' })

  const { login } = useSession()
  const { dictionaryWord } = useLanguage()
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value
    setPassport({ ...passport, [property]: value })
  }

  const handleLogin = () => {
    const res = login(passport)
    setShowModal(!res)
  }
  const handleRegister = () => {
    window.alert('No soy tan veloz... Prueba usr: user@gmail.com, pwd: 12345')
    inputRef.current.focus()
  }
  const closeModal = () => {
    setShowModal(false)
    inputRef.current.focus()
  }
  const handleForgot = () => window.alert('Por ahora a joderse')

  return (
    <>
      {showModal && <ErrorModal handleClick={closeModal}/>}
      <div className={styles.container}>
        <Form className={styles.body}>
          <FormHeader>
            <h2>{dictionaryWord('login.title')}</h2>
          </FormHeader>
            <FormGrup>
              <FromLabel>{dictionaryWord('login.email')}</FromLabel>
              <FormInput type='email' placeholder={dictionaryWord('login.emailBack')} ref={inputRef}/>
            </FormGrup>
          <FormGrup>
            <FromLabel>{dictionaryWord('login.password')}</FromLabel>
            <FormInput type='password' placeholder={dictionaryWord('login.passwordBack')}/>
          </FormGrup>
          <FormFooter>
            <FormGrup>
              <OutlineButton color = '#fff' background = {colorSecundary} onClick={handleLogin}>
                {dictionaryWord('login.login')}
              </OutlineButton>
            </FormGrup>
            <FormGrup>
              <OutlineButton color = '#fff' background = {colorSecundary} onClick={handleForgot}>
                {dictionaryWord('login.forgot')}
              </OutlineButton>
              <OutlineButton color = '#fff' background = {colorSecundary} onClick={handleRegister}>
                {dictionaryWord('login.register')}
              </OutlineButton>
            </FormGrup>
          </FormFooter>
        </Form>
      </div>
  </>
  )
}

export default FormLogin
