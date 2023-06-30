import styles from './card.module.css'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { AiFillHeart } from 'react-icons/ai'

const Card = ({ character, dictionary }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const { name, image, status, species, origin, gender } = character
  const { dictionaryWord } = dictionary
  const handleCardClick = () => setIsFlipped(!isFlipped)

  const frontClass = `${styles.face} ${styles.front} ${!isFlipped ? styles.noFlipped : styles.flipped}`
  const backClass = `${styles.face} ${styles.back} ${isFlipped ? styles.noFlipped : styles.flipped}`

  return (
   <div className={styles.card} onClick={handleCardClick}>
    <div className={frontClass}>
      <AiFillHeart className={styles.btnLike} />
      <ImCross className={styles.btnClose} />
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
    </div>
    <div className={backClass}>
      <h3>{name}</h3>
      <div className={styles.characteristics}>
        <div className={styles.propLine}>
          <h5 className={styles.propLabel}>{dictionaryWord('card.status')}</h5>
          <h5 className={styles.propValue}>{status}</h5>
        </div>
        <div className={styles.propLine}>
          <h5 className={styles.propLabel}>{dictionaryWord('card.species')}</h5>
          <h5 className={styles.propValue}>{species}</h5>
        </div>
        <div className={styles.propLine}>
          <h5 className={styles.propLabel}>{dictionaryWord('card.origin')}</h5>
          <h5 className={styles.propValue}>{origin.name}</h5>
        </div>
        <div className={styles.propLine}>
          <h5 className={styles.propLabel}>{dictionaryWord('card.gender')}</h5>
          <h5 className={styles.propValue}>{gender}</h5>
        </div>
      </div>
      <div className={styles.link}>
          <a href="#">{dictionaryWord('card.seeMore')}</a>
      </div>
    </div>
  </div>
  )
}

export default Card
