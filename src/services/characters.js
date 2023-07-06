import { CHARACTERS_ENDPOINT } from '../config/const'

export const searchCharacter = async (id) => {
  try {
    const res = await fetch(`${CHARACTERS_ENDPOINT}/${id}`)
    const data = await res.json()

    const mappedCharacter = {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin,
      location: data.location,
      image: data.image
    }
    return mappedCharacter
  } catch (error) {
    throw new Error('getCharacter error')
  }
}
