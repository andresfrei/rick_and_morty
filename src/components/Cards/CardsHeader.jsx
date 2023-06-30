import SearchBar from '../SearchBar/SearchBar'
import { NavigationButton } from '../_theme/Buttons'
import styles from './cards.module.css'

const CardsHeader = ({ dictionary, handleSearch }) => {
  const { dictionaryWord } = dictionary
  return (
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
  )
}

export default CardsHeader
