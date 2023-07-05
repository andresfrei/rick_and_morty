import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  name: '',
  token: null
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action) => {
      const { email } = action.payload
      state.email = email
      state.name = 'Cosme Fulanito'
      state.token = '121234sddff'
    },
    unsetSession: (state) => {
      state = initialState
    },
    notAuthorized: (state) => {
      state = initialState
    }
  }
})

export const { setSession, unsetSession, notAuthorized } = sessionSlice.actions
export default sessionSlice.reducer
