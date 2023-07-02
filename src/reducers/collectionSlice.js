import { createSlice } from '@reduxjs/toolkit'
import inicialData from '../mocks/data'
import { categories } from '../config/inicialState'

const initialState = {
  characters: inicialData,
  categories,
  filter: [],
  search: '',
  favorites: []
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      state.characters = [...state.characters, action.payload]
    },
    setSearch: (state, action) => {
      state.search = action.payload
    }
  }
})

export const { addCharacter, setSearch } = collectionSlice.actions
export default collectionSlice.reducer
