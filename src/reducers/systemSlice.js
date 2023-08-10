import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loader: false,
  toggleId: 0,
  errors: []
}

const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    setLoader: (state, action) => {
      const loader = action.payload
      return { ...state, loader }
    },
    setToggle: (state, action) => {
      const toggleId = action.payload
      return { ...state, toggleId }
    },
    setErrors: (state, action) => {
      const errors = action.payload
      return { ...state, errors }
    }
  }
})

export const { setLoader, setToggle, setErrors } = systemSlice.actions
export default systemSlice.reducer
