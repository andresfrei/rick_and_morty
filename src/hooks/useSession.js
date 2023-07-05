import { useDispatch, useSelector } from 'react-redux'
import { setSession, unsetSession, notAuthorized } from '../reducers/sessionSlice'
import { setData } from '../tools/localStorage'
// import { useEffect } from 'react'
import { validateLogin } from '../services/users'

const localKey = 'keyUsr'

export default function useSession () {
  const { email, fullName } = useSelector(state => state.session)

  const dispatch = useDispatch()

  const login = (passport) => {
    const user = validateLogin(passport)
    if (!user) {
      dispatch(notAuthorized())
      return false
    }
    dispatch(setSession(passport))
    setData(localKey, passport)
    return true
  }

  const logout = () => {
    dispatch(unsetSession())
    setData(localKey, {})
  }

  const hasLogged = !!email

  return { fullName, email, login, logout, hasLogged }
}
