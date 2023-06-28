import { useEffect, useState } from 'react'
import { getCharacters } from '../services/apiService'

const useCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState(null)

  const getItems = async () => {
    const filter = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15'
    const data = await getCharacters(filter)
    setCharacters(data)
  }
  const handleSearch = (value) => value?.length > 2
    ? setSearch(value.toLowerCase())
    : setSearch(null)

  const handleFilter = () => !search
    ? characters
    : characters.filter(character => character.name.toLowerCase().includes(search))

  const showCharacters = handleFilter()

  useEffect(getItems, [])

  return { characters, showCharacters, handleSearch }
}

export default useCharacters
