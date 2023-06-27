import styles from './cards.module.css'
import Card from '../Card/Card'

export default function Cards ({ characters }) {
  return (
      <div className={styles.cardsGalery}>
         {characters.map(character => (<Card key = {character.id} character = {character}/>))}
      </div>
  )
}
