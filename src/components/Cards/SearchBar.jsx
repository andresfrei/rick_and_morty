import { useState } from 'react'
import styles from './searchBar.module.css'
import { IoIosSearch } from 'react-icons/io'
import useLanguage from '../../hooks/useLanguage'
import useCharacters from '../../hooks/useCharacters'

export default function SearchBar () {
  const { dictionaryWord } = useLanguage()
  const { handleSearch } = useCharacters()
  const [input, setInput] = useState()
  const handleInputChange = (event) => {
    const { value } = event.target
    setInput(value)
    handleSearch(value)
  }

  return (
      <div className={styles.container}>
        <IoIosSearch className={styles.icon}/>
         <input
          type='search'
          placeholder={dictionaryWord('cards.search')}
          className={styles.input}
          onChange={handleInputChange}
          value={input}
        />
      </div>
  )
}
