import { API_URLS } from '../config/api'

export const searchCharacter = async (id, additionalsFieds = []) => {
  const { API_URL_CHARACTER } = API_URLS
  try {
    const res = await fetch(`${API_URL_CHARACTER}/${id}`)
    const data = await res.json()

    const mappedCharacter = {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin.name,
      location: data.location.name,
      image: data.image,
      like: false
    }

    // eslint-disable-next-line no-return-assign
    additionalsFieds.forEach(field => mappedCharacter[field] = data[field])

    return mappedCharacter
  } catch (error) {
    throw new Error('getCharacter error')
  }
}
