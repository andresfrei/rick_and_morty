// import axios from 'axios'
import mock from '../mocks/data'
const urlBase = 'https://rickandmortyapi.com/api'

export const getCharactersByIDs = async (filter) => {
  const url = `${urlBase}/character/${filter}`
  console.log(url)
  // const res = await fetch(url)
  // const { data } = res
  return mock
}
