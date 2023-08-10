import { useSelector, useDispatch } from 'react-redux'
import { addCharacter, updateCharacter, deleteCharacter, setSearch, setCharacters } from '../reducers/collectionSlice'
import { localStorageKeys } from '../config/const'

export default function useCharacters () {
  const { characters, search } = useSelector(state => state.collection)
  const dispatch = useDispatch()

  const hasCharacters = !!characters

  const handleAddCharacter = (character) => {
    dispatch(addCharacter(character))
    saveLocalCharacters()
  }

  const handleDeleteCharacter = (id) => {
    dispatch(deleteCharacter(id))
    saveLocalCharacters()
  }

  const handleUpdateCharacter = (character) => {
    dispatch(updateCharacter(character))
    saveLocalCharacters()
  }

  const handleSearch = (value) => {
    value = value?.length > 2 ? value.toLowerCase() : null
    dispatch(setSearch(value))
  }

  const handleFilter = () => !search
    ? characters
    : characters.filter(character =>
      character.name.toLowerCase().includes(search) ||
      character.gender.toLowerCase().includes(search) ||
      character.origin.toLowerCase().includes(search) ||
      character.species.toLowerCase().includes(search) ||
      character.status.toLowerCase().includes(search)
    )

  const loadCharacters = (characters) => dispatch(setCharacters(characters))

  const showCharacters = handleFilter()

  const saveLocalCharacters = () => {
    const galery = JSON.stringify(characters)
    window.localStorage.setItem(localStorageKeys.appGalery, galery)
  }

  return {
    characters,
    hasCharacters,
    handleAddCharacter,
    handleDeleteCharacter,
    handleUpdateCharacter,
    showCharacters,
    loadCharacters,
    handleSearch,
    search
  }
}
