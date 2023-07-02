// import { getCharactersByIDs } from '../services/characters.service'
import { useSelector, useDispatch } from 'react-redux'
import { setSearch } from '../reducers/collectionSlice'

const useCharacters = () => {
  const { characters, search } = useSelector(state => state.collection)
  const dispatch = useDispatch()

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

  const showCharacters = handleFilter()

  return { characters, showCharacters, handleSearch }
}

export default useCharacters
