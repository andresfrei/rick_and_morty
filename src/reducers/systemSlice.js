import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loader: false,
  toggleId: 0,
  error: ''
}

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload
    },
    setToggle: (state, action) => {
      state.toggleId = action.payload
    }
  },
  setError: (state, action) => {
    state.error = action.payload
  }
})

export const { setLoader, setToggle, setError } = systemSlice.actions
export default systemSlice.reducer
