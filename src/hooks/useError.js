import { useSelector, useDispatch } from 'react-redux'
import { setError } from '../reducers/systemSlice'
import useLanguage from './useLanguage'

export default function useError () {
  const { dictionaryWord } = useLanguage()
  const { error } = useSelector(state => state.system)
  const dispatch = useDispatch()
  const cleanError = () => dispatch(setError(null))
  const addError = (value) => dispatch(setError(value))
  const hasError = !!error
  const textError = !hasError ? null : dictionaryWord('errors.' + error)
  return { hasError, textError, addError, cleanError }
}
