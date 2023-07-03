import { useSelector, useDispatch } from 'react-redux'
import { setLoader } from '../reducers/loaderSlice'

const useLoader = () => {
  const { loader } = useSelector(state => state.loader)
  const dispatch = useDispatch()

  const loaderTrue = () => dispatch(setLoader(true))
  const loaderfalse = () => dispatch(setLoader(false))

  return { loader, loaderTrue, loaderfalse }
}
export default useLoader
