import { useSelector, useDispatch } from 'react-redux'
import { setError } from '../reducers/systemSlice'
import useLanguage from './useLanguage'

export default function useToggle () {
  const { dictionaryWord } = useLanguage()
  const { error } = useSelector(state => state.system)
  const dispatch = useDispatch()
  const cleanError = () => dispatch(setError(null))
  const hasError = !!error
  const textError = hasError ? dictionaryWord('errors.' + error) : null
  return { hasError, textError, cleanError }
}
