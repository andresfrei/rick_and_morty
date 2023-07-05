import { createSlice } from '@reduxjs/toolkit'
import { categories } from '../config/inicialState'

const initialState = {
  characters: [],
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
      const characters = [...state.characters, action.payload]
      state.characters = characters
    },
    setSearch: (state, action) => {
      const search = action.payload
      state.search = search
    }
  }
})

export const { addCharacter, setSearch } = collectionSlice.actions
export default collectionSlice.reducer
