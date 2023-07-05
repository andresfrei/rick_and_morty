import { useSelector, useDispatch } from 'react-redux'
import { setToggle } from '../reducers/systemSlice'

export default function useToggle () {
  const { toggleId } = useSelector(state => state.system)
  const dispatch = useDispatch()

  const handleToggle = (id) => {
    isToggle(id)
      ? dispatch(setToggle(0))
      : dispatch(setToggle(id))
  }

  const isToggle = (id) => toggleId === id

  return { handleToggle, isToggle }
}
