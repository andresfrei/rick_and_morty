import styles from './cards.module.css'
import Card from '../Card/Card'
import SearchBar from '../SearchBar/SearchBar'
import { NavigationButton } from '../_theme/Buttons'
import { BiSolidMessageSquareAdd } from 'react-icons/bi'

export default function Cards ({ characters, dictionary, handleSearch }) {
  const { dictionaryWord } = dictionary
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{dictionaryWord('cards.title')}</h2>
        <div className={styles.toolsBar}>
          <NavigationButton>
            {dictionaryWord('cards.add')}
          </NavigationButton>
          <NavigationButton>{dictionaryWord('cards.filter')}</NavigationButton>
          <SearchBar handleSearch={handleSearch} dictionary = {dictionary}/>
        </div>
      </div>
      <div className={styles.cardsGalery}>
         {characters.map(character => (
          <Card
            key = {character.id}
            character = {character}
            dictionary= {dictionary}
          />
         )) }
      </div>
    </div>
  )
}

// <h2 className={styles.title}>{dictionaryWord('cars.title')}</h2>
