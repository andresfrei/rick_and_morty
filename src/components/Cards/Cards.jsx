import styles from './cards.module.css'
import Card from '../Card/Card'

export default function Cards ({ characters, dictionary }) {
  // const { dictionaryWord } = dictionary
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mi galeria</h2>
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
