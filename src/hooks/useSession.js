import { useDispatch, useSelector } from 'react-redux'
import { setSession, unsetSession } from '../reducers/sessionSlice'
import { setData } from '../tools/localStorage'
// import { useEffect } from 'react'

const localKey = 'keyUsr'

export default function useSession () {
  const { email, fullName } = useSelector(state => state.session)

  const dispatch = useDispatch()

  const login = (passport) => {
    dispatch(setSession(passport))
    setData(localKey, passport)
  }

  const logout = () => {
    dispatch(unsetSession())
    setData(localKey, {})
  }

  const hasLogged = !!email

  return { fullName, email, login, logout, hasLogged }
}
