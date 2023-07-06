import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchCharacter } from '../../services/characters'

import styled from './detail.module.css'

export default function Detail () {
  const [character, setCharacter] = useState({})
  const params = useParams()
  const { id } = params

  useEffect(() => {
    searchCharacter(id).then(item => setCharacter(item))
  }, [])

  return (
    <div className={styled.container}>
      <div>
        <img src={character.image} alt={`${character.name} imagen`} />
      </div>
        <h2>{character.name}</h2>
        <h3>{character.status}</h3>
        <h3>{character.species}</h3>
        <h3>{character.gender}</h3>
        <h3>{character.origin.name}</h3>
        <h3>{character.location.name}</h3>
      <div>
      </div>
    </div>
  )
}
