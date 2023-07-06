import { useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { ImCross } from 'react-icons/im'
import { AiFillHeart } from 'react-icons/ai'
import { OutlineButton } from '../_theme/Buttons'

import useLanguage from '../../hooks/useLanguage'
import useCharacters from '../../hooks/useCharacters'

import Property from './Property'
import styles from './card.module.css'
// import { colors } from '../../config/theme'

export default function Card ({ character }) {
  const [showCard, setShowCard] = useState(true)
  const { id, name, image, status, species, origin, gender } = character
  const { handleDelete } = useCharacters()

  const nodeRef = useRef(null)

  const [isFlipped, setIsFlipped] = useState(false)
  const [like, setLike] = useState(false)

  const { dictionaryWord } = useLanguage()

  const frontClass = `${styles.face} ${styles.front} ${!isFlipped ? styles.noFlipped : styles.flipped}`
  const backClass = `${styles.face} ${styles.back} ${isFlipped ? styles.noFlipped : styles.flipped}`
  const btnLikeClass = `${styles.btnLike} ${like ? styles.like : ''}`

  const handleCardClick = () => setIsFlipped(!isFlipped)

  const handleClose = (id) => {
    event.stopPropagation()
    setShowCard(false)
    handleDelete(id)
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
    <SwitchTransition>
    <CSSTransition
      in={showCard}
      nodeRef={nodeRef}
      timeout={800}
      classNames="alert"
      unmountOnExit
      onEnter={() => setShowCard(false)}
      onExited={() => setShowCard(true)}
    >
      <div className={styles.card} onClick={handleCardClick}>
        <div className={frontClass}>
          <AiFillHeart className={btnLikeClass} onClick={handleLike} />
          { !like && <ImCross className={styles.btnClose} onClick={() => handleClose(id)} />}
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
              <OutlineButton onClick={handleMore} height='30px' >
                {dictionaryWord('card.seeMore')}
              </OutlineButton>
          </div>
        </div>
      </div>
    </CSSTransition>
  </SwitchTransition>
  )
}
