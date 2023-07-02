import styles from './cards.module.css'
import Card from '../Card/Card'
import CardsHeader from './CardsHeader'

import useCharacters from '../../hooks/useCharacters'

export default function Cards () {
  const { showCharacters } = useCharacters()
  return (
    <div className={styles.container}>
      <CardsHeader/>
      <div className={styles.cardsGalery}>
         {showCharacters.map(character => (
          <Card
            key = {character.id}
            character = {character}
          />
         )) }
      </div>
    </div>
  )
}

// <h2 className={styles.title}>{dictionaryWord('cars.title')}</h2>
