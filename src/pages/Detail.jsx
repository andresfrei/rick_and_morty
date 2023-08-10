import { useLoaderData } from 'react-router-dom'
import Detail from '../components/Detail/Detail'
import { searchCharacter } from '../services/characters'
import useLanguage from '../hooks/useLanguage'

export default function DetailPage () {
  const { character } = useLoaderData()
  const { dictionaryWord } = useLanguage()
  return (
    <sedivction className='flex-grow'>
      <h1 className='my-1'>{dictionaryWord('card.detail')}</h1>
      <Detail character={character}/>
    </sedivction>
  )
}

export async function loaderCharacter ({ params }) {
  // const character = await searchCharacter(params.id, ['episode'])
  const character = await searchCharacter(params.id)
  console.log(character)
  return { character }
}
