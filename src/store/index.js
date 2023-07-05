import { configureStore } from '@reduxjs/toolkit'

import sessionReducer from '../reducers/sessionSlice'
import collectionReducer from '../reducers/collectionSlice'
import languageReducer from '../reducers/languageSlice'
import systemReducer from '../reducers/systemSlice'

export default configureStore({
  reducer: {
    session: sessionReducer,
    collection: collectionReducer,
    language: languageReducer,
    system: systemReducer
  }
})
