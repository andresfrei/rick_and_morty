import { configureStore } from '@reduxjs/toolkit'

import sessionReducer from '../reducers/sessionSlice'
import collectionSlice from '../reducers/collectionSlice'
import languageReducer from '../reducers/languageSlice'
import systemReducer from '../reducers/systemSlice'

export default configureStore({
  reducer: {
    session: sessionReducer,
    collection: collectionSlice,
    language: languageReducer,
    system: systemReducer
  }
})
