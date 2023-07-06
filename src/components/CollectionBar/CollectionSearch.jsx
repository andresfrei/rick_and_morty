import useLanguage from '../../hooks/useLanguage'
import useCharacters from '../../hooks/useCharacters'

import { SearchBar } from '../_theme/ButtonBar'

export default function CollectionSearch () {
  const { dictionaryWord } = useLanguage()
  const { handleSearch } = useCharacters()

  return (
    <SearchBar
      type='search'
      placeholder={dictionaryWord('cards.search')}
      onInput = {handleSearch}
      preventDefault = {true}
    />
  )
}
