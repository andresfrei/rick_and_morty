import { useEffect } from 'react'
import es from '../translations/es'
import en from '../translations/en'

import { useSelector, useDispatch } from 'react-redux'
import { setSelected, setDictionary } from '../reducers/languageSlice'

export default function useLanguage () {
  const { selected, dictionary } = useSelector(state => state.language)
  const dispatch = useDispatch()

  const dictionaryWord = (key) => {
    const keys = key.split('.')
    if (!dictionary[keys[0]]) return '<undefined>'
    return dictionary[keys[0]][keys[1]] || '<undefined>'
  }

  useEffect(() => {
    switch (selected) {
      case 'es':
        dispatch(setDictionary(es))
        break
      case 'en':
        dispatch(setDictionary(en))
        break
    }
  }, [selected])

  const setLanguage = (value) => dispatch(setSelected(value))

  return { selected, setLanguage, dictionaryWord }
}
