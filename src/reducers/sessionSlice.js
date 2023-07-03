import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  status: 0 // 0 -> No loggin | 1 -> ErrorLoggin | 2 -> loggin
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action) => {
      state = { user: action.payload, status: 2 }
    },
    unsetSession: (state) => {
      state = { user: {}, status: 0 }
    },
    notAuthorized: (state) => {
      state = { user: {}, status: 1 }
    }
  }
})

export const { setSession, unsetSession, notAuthorized } = sessionSlice.actions
export default sessionSlice.reducer
