import { useState } from 'react'
import styles from './searchBar.module.css'
import { IoIosSearch } from 'react-icons/io'

export default function SearchBar ({ handleSearch }) {
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
          placeholder='Search by name'
          className={styles.input}
          onChange={handleInputChange}
          value={input}
        />
      </div>
  )
}
