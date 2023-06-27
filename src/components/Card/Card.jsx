import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import styles from './card.module.css'

const Card = ({ character }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const { name, image, status, species, origin, gender } = character

  const handleCardClick = () => setIsFlipped(!isFlipped)

  const frontClass = `${styles.face} ${styles.front} ${!isFlipped ? styles.noFlipped : styles.flipped}`
  const backClass = `${styles.face} ${styles.back} ${isFlipped ? styles.noFlipped : styles.flipped}`

  return (
   <div className={styles.card} onClick={handleCardClick}>
    <div className={frontClass}>
      <ImCross className={styles.btnClose} size={14} />
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
    </div>
    <div className={backClass}>
      <h3>{name}</h3>
      <div className={styles.characteristics}>
        <h5><span>Estado:</span> {status}</h5>
        <h5><span>Especie:</span> {species}</h5>
        <h5><span>Origen:</span> {origin.name}</h5>
        <h5><span>Genero:</span> {gender}</h5>
      </div>
      <div className={styles.link}>
          <a href="#">Ver mas</a>
      </div>
    </div>
  </div>
  )
}

export default Card
