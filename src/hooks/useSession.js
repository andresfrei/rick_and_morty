import { useDispatch, useSelector } from 'react-redux'
import { setSession, unsetSession, notAuthorized } from '../reducers/sessionSlice'
import { getData, setData } from '../tools/localStorage'
import { useEffect } from 'react'
import { isValidateLogin } from '../validate/loginValidate'

const localKey = 'keyUsr'

const useSession = () => {
  const { session } = useSelector(state => state.session)
  const dispatch = useDispatch()

  const login = (passpord) => {
    if (!isValidateLogin(passpord)) {
      console.log('No loggin')
      dispatch(notAuthorized())
      return false
    }
    dispatch(setSession(passpord))
    setData(localKey, passpord)
    console.log('Si loggin')
    return true
  }

  const logout = () => {
    dispatch(unsetSession())
    setData(localKey, {})
  }

  useEffect(() => {
    const localSession = getData(localKey)
    localSession?.id && dispatch(setSession(localSession))
  }, [])

  return { session, login, logout }
}

export default useSession
