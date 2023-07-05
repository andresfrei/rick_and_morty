import { useState } from 'react'

import useLanguage from '../../hooks/useLanguage'
import useCharacters from '../../hooks/useCharacters'

import { SearchBar } from '../_theme/ButtonBar'

export default function CollectionSearch () {
  const { dictionaryWord } = useLanguage()
  const { handleSearch } = useCharacters()
  const [input, setInput] = useState()

  const handleInputChange = (event) => {
    const { value } = event.target
    setInput(value)
    handleSearch(value)
  }

  return (
    <SearchBar
      type='search'
      placeholder={dictionaryWord('cards.search')}
      onChange={handleInputChange}
      value={input}
    />
  )
}
