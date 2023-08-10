import styled from './detail.module.css'
import { useNavigate } from 'react-router-dom'
import { OutlineButton } from '../_theme/Buttons'
import useLanguage from '../../hooks/useLanguage'

import Property from './Property'

export default function Detail ({ character }) {
  const navigate = useNavigate()
  const { dictionaryWord } = useLanguage()
  const handleBack = () => navigate(-1)

  return (
    <div className={styled.container}>
      <div>
        <img src={character.image} alt={`${character.name} imagen`} />
      </div>
      <div className={styled.detail}>
        <h2 className={styled.title}>{character.name}</h2>
        <div className={styled.properties}>
          <Property label={dictionaryWord('card.status')} value={character.status} />
          <Property label={dictionaryWord('card.species')} value={character.species} />
          <Property label={dictionaryWord('card.gender')} value={character.gender} />
          <Property label={dictionaryWord('card.origin')} value={character.origin} />
          <Property label={dictionaryWord('card.location')} value={character.location} />
        </div>
        <div className={styled.footer}>
            <OutlineButton
              onClick={handleBack}
              height = '40px'
              width = '250px'
            >
              {dictionaryWord('buttons.back')}
            </OutlineButton>
        </div>
      </div>
    </div>
  )
}
