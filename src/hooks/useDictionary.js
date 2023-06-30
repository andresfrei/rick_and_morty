import { useEffect, useState } from 'react'
import es from '../translations/es'
import en from '../translations/en'

const languageDefault = 'es'

const useDictionary = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageDefault)
  const [dictionary, setDictionary] = useState(es)

  const dictionaryWord = (key) => {
    const keys = key.split('.')
    return dictionary[keys[0]][keys[1]]
  }

  useEffect(() => {
    switch (selectedLanguage) {
      case 'es':
        setDictionary(es)
        break
      case 'en':
        setDictionary(en)
        break
    }
  }, [selectedLanguage])

  return { selectedLanguage, setSelectedLanguage, dictionaryWord }
}
export default useDictionary
