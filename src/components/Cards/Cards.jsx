import styles from './cards.module.css'
import Card from '../Card/Card'
import CardsHeader from './CardsHeader'

export default function Cards ({ characters, dictionary, handleSearch }) {
  return (
    <div className={styles.container}>
      <CardsHeader handleSearch={handleSearch} dictionary={dictionary}/>
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
