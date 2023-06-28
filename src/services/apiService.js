// import data from '../mocks/data.js'

const BASE_URL = 'https://rickandmortyapi.com/api'

export const getCharacters = async (filter) => {
  const url = `${BASE_URL}/character/${filter}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
