import useCharacters from './useCharacters'
import { randomGenerete } from '../tools/helpers'
import useToggle from './useToggle'

export default function useCardAdd () {
  const { handleAdd, idExists, error, cleanError } = useCharacters()
  const { handleToggle } = useToggle()

  const handleRandom = () => {
    let found = true
    let random = 0
    while (found) {
      random = randomGenerete(1, 827) // api range
      found = idExists(random)
    }
    handleAdd(random)
  }

  return { handleRandom, handleAdd, handleToggle, error, cleanError }
}
