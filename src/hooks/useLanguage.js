import es from '../translations/es'
import en from '../translations/en'

import { setLanguage as setLanguageSlice } from '../reducers/languageSlice'
import { useSelector, useDispatch } from 'react-redux'
import { localStorageKeys } from '../config/const'

export default function useLanguage () {
  const { selected, dictionary } = useSelector(state => state.language)
  const dispatch = useDispatch()

  const dictionaryWord = (key) => {
    const keys = key.split('.')
    if (!dictionary[keys[0]]) return '<undefined>'
    return dictionary[keys[0]][keys[1]] || '<undefined>'
  }

  const setLanguage = (value) => {
    const selected = value
    const dictionary = selected === 'es' ? es : en
    dispatch(setLanguageSlice({ selected, dictionary }))
    window.localStorage.setItem(localStorageKeys.appLanguage, value)
  }

  return { selected, setLanguage, dictionaryWord }
}
