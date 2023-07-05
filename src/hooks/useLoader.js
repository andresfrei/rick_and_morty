import { useSelector, useDispatch } from 'react-redux'
import { setLoader } from '../reducers/systemSlice'

export default function useLoader () {
  const { loader } = useSelector(state => state.system)
  const dispatch = useDispatch()

  const loaderTrue = () => dispatch(setLoader(true))
  const loaderfalse = () => dispatch(setLoader(false))

  return { loader, loaderTrue, loaderfalse }
}
