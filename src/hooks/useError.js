import { useSelector, useDispatch } from 'react-redux'
import { setErrors } from '../reducers/systemSlice'

export default function useError () {
  const { errors } = useSelector(state => state.system)
  const dispatch = useDispatch()
  const cleanError = () => dispatch(setErrors([]))
  const addErrors = (errors) => dispatch(setErrors(errors))
  const hasErrors = !!errors.length
  return { hasErrors, addErrors, errors, cleanError }
}
