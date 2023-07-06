import { searchCharacter } from '../services/characters'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch, addCharacter, deleteCharacter } from '../reducers/collectionSlice'
import { validateCharacterId } from '../validate/characterValidator'
import useError from './useError'

export default function useCharacters () {
  const dispatch = useDispatch()
  const { characters, search } = useSelector(state => state.collection)
  const { addError } = useError()

  const hasCharacters = !!characters

  const handleSearch = (value) => value?.length > 2
    ? dispatch(setSearch(value.toLowerCase()))
    : dispatch(setSearch(null))

  const handleFilter = () => !search
    ? characters
    : characters.filter(character =>
      character.name.toLowerCase().includes(search) ||
      character.gender.toLowerCase().includes(search) ||
      character.origin.name.toLowerCase().includes(search) ||
      character.species.toLowerCase().includes(search) ||
      character.status.toLowerCase().includes(search)
    )

  const idExists = (id) => {
    const find = characters.find(character => character.id === Number(id))
    return !!find
  }

  const handleAdd = (id) => {
    if (!id) return false
    const validate = validateCharacterId(id)
    if (!validate.isValidate) {
      addError(validate.error)
      return false
    }
    if (idExists(id)) {
      addError('dataExist')
      return false
    }
    searchCharacter(id)
      .then(newCharacter => {
        dispatch(addCharacter(newCharacter))
        return true
      })
      .catch(err => addError(err))
  }

  const handleDelete = (id) => dispatch(deleteCharacter(id))

  const showCharacters = handleFilter()

  return { hasCharacters, showCharacters, handleSearch, handleAdd, handleDelete, idExists }
}
