import { useDispatch, useSelector } from 'react-redux'
import { setSession, unsetSession } from '../reducers/sessionSlice'
import { localStorageKeys } from '../config/const'

export default function useSession () {
  const { email, fullName } = useSelector(state => state.session)

  const dispatch = useDispatch()

  const login = (passport, save = true) => {
    dispatch(setSession(passport))
    save && saveSession(passport)
  }

  const logout = () => {
    dispatch(unsetSession())
    saveSession('')
  }

  const saveSession = (passport) => {
    const stringPassport = JSON.stringify(passport)
    window.localStorage.setItem(localStorageKeys.appSession, stringPassport)
  }

  const hasLogged = !!email

  return { fullName, email, login, logout, hasLogged }
}
