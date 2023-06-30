import axios from 'axios'

const urlBase = 'https://rickandmortyapi.com/api'

export const getCharactersByIDs = async (ids) => {
  const res = await axios.get(`${urlBase}/character/${ids}`)
  return res.data
}
