import useCharacters from '../../hooks/useCharacters'
import useToggle from '../../hooks/useToggle'
import styles from './collection.module.css'

import Card from '../Card/Card'
import CardAdd from '../CardAdd/CardAdd'

export default function Coleccion () {
  const { showCharacters } = useCharacters()
  const { isToggle } = useToggle()
  return (
    <div className={styles.gridGalery}>
      {
        showCharacters.map(character => (
          <Card
            key = {character.id}
            character = {character}
          />
        ))
      }
      { isToggle(3) && <CardAdd/> }
    </div>
  )
}
