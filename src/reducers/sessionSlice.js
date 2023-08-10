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
      const session = {
        email: action.payload,
        name: 'Cosme Fulanito',
        token: 'adsw53434534fsñdflsfksdf'
      }
      return session
    },
    unsetSession: (state) => {
      return initialState
    },
    notAuthorized: (state) => {
      return initialState
    }
  }
})

export const { setSession, unsetSession, notAuthorized } = sessionSlice.actions
export default sessionSlice.reducer
