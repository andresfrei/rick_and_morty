import './cards.css'
import Card from '../Card/Card';

export default function Cards({characters}) {
   return (
      <div className='cards-galery'>
         {characters.map(character => (<Card key = {character.id} character = {character}/>))}
      </div>      
)
}
