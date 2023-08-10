import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  characters: [],
  search: ''
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      const characters = action.payload
      return { ...state, characters }
    },
    addCharacter: (state, action) => {
      const characters = [...state.characters, action.payload]
      return { ...state, characters }
    },
    updateCharacter: (state, action) => {
      const character = action.payload
      const characters = [...state.characters, character]
      return { ...state, characters }
    },
    deleteCharacter: (state, action) => {
      const characters = state.characters.filter(character => character.id !== action.payload)
      return { ...state, characters }
    },
    setSearch: (state, action) => {
      const search = action.payload
      return { ...state, search }
    }
  }
})

export const { addCharacter, updateCharacter, deleteCharacter, setSearch, setCharacters } = collectionSlice.actions
export default collectionSlice.reducer
