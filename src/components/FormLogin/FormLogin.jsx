import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import useSession from '../../hooks/useSession'
import useLanguage from '../../hooks/useLanguage'
import useToggle from '../../hooks/useToggle'
import { validateLogin } from '../../services/users'

import ErrorModal from '../ErrorModal/ErrorModal'

import { OutlineButton } from '../_theme/Buttons'
import { Form, FormHeader, FormFooter, FormGrup, InputGrup } from '../_theme/Forms'
import styles from './formLogin.module.css'

export default function FormLogin () {
  const { handleToggle, isToggle } = useToggle()
  const [passport, setPassport] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const { login } = useSession()
  const { dictionaryWord } = useLanguage()

  const handleChange = (event) => {
    const property = event.target.name
    const value = event.target.value
    setPassport({ ...passport, [property]: value })
  }

  const handleLogin = () => {
    const res = validateLogin(passport)
    if (res) {
      login(passport)
      navigate('/home')
    } else {
      handleToggle(4)
    }
  }

  const handleRegister = () => {
    window.alert('No soy tan veloz... Prueba usr: account1@gmail.com, pwd: 112233')
    // inputRef.current.focus()
  }
  const closeModal = () => {
    handleToggle(4)
    // inputRef.current.focus()
  }
  const handleForgot = () => window.alert('Por ahora a joderse')

  return (
    <>
      {isToggle(4) && <ErrorModal handleClick={closeModal}/>}
      <div className={styles.container}>
        <Form className={styles.body}>
          <FormHeader>
            <h2>{dictionaryWord('login.title')}</h2>
          </FormHeader>
          <InputGrup
            name='email'
            type='email'
            label={dictionaryWord('login.email')}
            placeholder={dictionaryWord('login.emailBack')}
            onChange = {handleChange}
          />
          <InputGrup
            name='password'
            type='password'
            label={dictionaryWord('login.password')}
            placeholder={dictionaryWord('login.passwordBack')}
            onChange = {handleChange}
          />
          <FormFooter>
            <FormGrup>
              <OutlineButton onClick={handleLogin}>
                {dictionaryWord('login.login')}
              </OutlineButton>
            </FormGrup>
            <FormGrup>
              <OutlineButton onClick={handleForgot}>
              {dictionaryWord('login.forgot')}
              </OutlineButton>
              <OutlineButton onClick={handleRegister}>
                {dictionaryWord('login.register')}
              </OutlineButton>
            </FormGrup>
          </FormFooter>
        </Form>
      </div>
  </>
  )
}
