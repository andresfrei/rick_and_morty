import { useState } from 'react';
import './card.css'
import {ImCross} from 'react-icons/im'

const Card = ({ character }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleCardClick = () => setIsFlipped(!isFlipped)
  const {name, image, status, species, origin, gender} = character
  return (
   <div className='card' onClick={handleCardClick}>
    <div className={`face front ${!isFlipped ? 'no-' : ''}flipped`}>
      <ImCross className='btn-close' size={14} />
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
    <div className={`face back ${isFlipped ? 'no-' : ''}flipped`}>
      <h3>{name}</h3>
      <div className='characteristics'>
        <h5><span>Estado:</span> {status}</h5>
        <h5><span>Especie:</span> {species}</h5>
        <h5><span>Origen:</span> {origin.name}</h5>
        <h5><span>Genero:</span> {gender}</h5>
      </div>
      <div className='link'>
          <a href="#">Ver mas</a>
      </div>
    </div>
  </div> 
  );
};

export default Card
