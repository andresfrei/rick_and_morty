import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../reducers/userSlice'
import collectionReducer from '../reducers/collectionSlice'
import languageReducer from '../reducers/languageSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    collection: collectionReducer,
    language: languageReducer
  }
})
