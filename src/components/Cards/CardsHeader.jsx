import SearchBar from './SearchBar'
import { NavigationButton } from '../_theme/Buttons'
import styles from './cards.module.css'
import useLanguage from '../../hooks/useLanguage'

const CardsHeader = () => {
  const { dictionaryWord } = useLanguage()
  return (
    <div className={styles.header}>
        <h2 className={styles.title}>{dictionaryWord('cards.title')}</h2>
        <div className={styles.toolsBar}>
          <NavigationButton>
            {dictionaryWord('cards.add')}
          </NavigationButton>
          <NavigationButton>{dictionaryWord('cards.filter')}</NavigationButton>
          <SearchBar />
        </div>
      </div>
  )
}

export default CardsHeader
