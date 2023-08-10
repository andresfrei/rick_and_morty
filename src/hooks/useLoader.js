import { useSelector, useDispatch } from 'react-redux'
import { setLoader as setDispatch } from '../reducers/systemSlice'

export default function useLoader () {
  const { loader } = useSelector(state => state.system)
  const dispatch = useDispatch()
  const setLoader = (value) => dispatch(setDispatch(value))
  return { loader, setLoader }
}
