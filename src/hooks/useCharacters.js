import { searchCharacter } from '../services/characters'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch, addCharacter } from '../reducers/collectionSlice'
import { useState } from 'react'
import { validateCharacterId } from '../validate/characterValidator'
import useLanguage from './useLanguage'

export default function useCharacters () {
  const dispatch = useDispatch()
  const { characters, search } = useSelector(state => state.collection)
  const [error, setError] = useState('')
  const { dictionaryWord } = useLanguage()

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
    const find = characters.find(character => character.id === id)
    return !!find
  }

  const handleAdd = (id) => {
    if (!id) return
    const validate = validateCharacterId(id)
    if (!validate.isValidate) {
      setError(validate.error)
      return
    }
    if (idExists(id)) {
      setError('dataExist')
      return
    }
    searchCharacter(id)
      .then(newCharacter => dispatch(addCharacter(newCharacter)))
      .catch(err => {
        setError('feching')
        setError(err)
      })
  }

  const showCharacters = handleFilter()

  const hasError = error ? dictionaryWord(`error.${error}`) : ''

  const cleanError = () => setError(null)

  return { hasCharacters, showCharacters, handleSearch, handleAdd, hasError, idExists, error, cleanError }
}
