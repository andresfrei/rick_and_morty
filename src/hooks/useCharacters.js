import { useEffect, useState } from 'react'
import { getCharactersByIDs } from '../services/characters.service'

const initialFilter = '[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]'

const useCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState(null)
  const [filter, setFilter] = useState(initialFilter)

  const handleSearch = (value) => value?.length > 2
    ? setSearch(value.toLowerCase())
    : setSearch(null)

  const handleFilter = () => !search
    ? characters
    : characters.filter(character => character.name.toLowerCase().includes(search))

  const showCharacters = handleFilter()

  // const handleDelte = (id) => {}

  useEffect(async () => {
    const data = await getCharactersByIDs(filter)
    setCharacters(data)
  }, [])

  return { characters, showCharacters, handleSearch }
}

export default useCharacters
