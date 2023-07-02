import { createSlice } from '@reduxjs/toolkit'

// import es from '../translations/es'

const initialState = {
  selected: 'es',
  dictionary: {}
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload
    },
    setDictionary: (state, action) => {
      state.dictionary = action.payload
    }
  }
})

export const { setDictionary, setSelected } = languageSlice.actions
export default languageSlice.reducer
