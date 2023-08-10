import useToggle from './useToggle'
import useLoader from './useLoader'
import useError from './useError'
import useCharacters from './useCharacters'

import { validateCharacterId } from '../validators/character.validate'
import { searchCharacter } from '../services/characters'
import { randomGenerete } from '../tools/helpers'

export default function useCardAdd () {
  const { characters, handleAddCharacter, handleUpdateCharacter, handleDeleteCharacter } = useCharacters()

  const { handleToggle } = useToggle()
  const { addErrors } = useError()
  const { setLoader } = useLoader()

  const handleRandom = () => {
    setLoader(true)
    let found = true
    let random = 0
    while (found) {
      random = randomGenerete(1, 827) // api range
      found = findCharacter(random)
    }
    newCharacter(random)
    setLoader(false)
  }
  const handleDelete = (id) => handleDeleteCharacter(id)

  const findCharacter = (id) => characters.find(character => character.id === Number(id))

  const newCharacter = async (id) => {
    const resul = validateCharacterId(id)
    if (!resul.validated) {
      addErrors(resul.errors)
      return false
    }

    if (findCharacter(id)) {
      addErrors(['dataExist'])
      return false
    }
    try {
      const newCharacter = await searchCharacter(id)
      handleAddCharacter(newCharacter)
    } catch (error) {
      addErrors(['errApi'])
      return false
    }
    return true
  }

  const handleLike = (id) => {
    const character = findCharacter(id)
    if (!character) return
    character.like = !character.like
    handleUpdateCharacter(character)
  }

  return { handleRandom, newCharacter, handleToggle, handleLike, handleDelete }
}
