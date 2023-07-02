import styles from './card.module.css'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { AiFillHeart } from 'react-icons/ai'
import { OutlineButton } from '../_theme/Buttons'
import Property from './Property'
import useLanguage from '../../hooks/useLanguage'
import { colorPrimary, colorSecundary } from '../../config/colors'

const Card = ({ character }) => {
  const { name, image, status, species, origin, gender } = character

  const [isFlipped, setIsFlipped] = useState(false)
  const [like, setLike] = useState(false)

  const { dictionaryWord } = useLanguage()

  const frontClass = `${styles.face} ${styles.front} ${!isFlipped ? styles.noFlipped : styles.flipped}`
  const backClass = `${styles.face} ${styles.back} ${isFlipped ? styles.noFlipped : styles.flipped}`
  const btnLikeClass = `${styles.btnLike} ${like ? styles.like : ''}`

  const handleCardClick = () => setIsFlipped(!isFlipped)

  const handleClose = (event) => {
    event.stopPropagation()
    window.alert('Close click')
  }
  const handleLike = (event) => {
    event.stopPropagation()
    setLike(!like)
  }
  const handleMore = (event) => {
    event.stopPropagation()
    window.alert('More..')
  }

  return (
   <div className={styles.card} onClick={handleCardClick}>
    <div className={frontClass}>
      <AiFillHeart className={btnLikeClass} onClick={handleLike} />
      { !like && <ImCross className={styles.btnClose} onClick={handleClose} />}
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
    </div>
    <div className={backClass}>
      <h3>{name}</h3>
      <div className={styles.body}>
        <Property label = {dictionaryWord('card.status')} value = { status } />
        <Property label = {dictionaryWord('card.species')} value = { species } />
        <Property label = {dictionaryWord('card.origin')} value = { origin.name } />
        <Property label = {dictionaryWord('card.gender')} value = { gender } />
      </div>
      <div className={styles.footer}>
          <OutlineButton color={colorPrimary} background={colorSecundary} onClick={handleMore} >
            {dictionaryWord('card.seeMore')}
          </OutlineButton>
      </div>
    </div>
  </div>
  )
}

export default Card

// <button onClick={handleMore}>{dictionaryWord('card.seeMore')}</button>
