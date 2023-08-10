import useLanguage from './useLanguage'
import useSession from './useSession'
import useCharacters from './useCharacters'

import { localStorageKeys, defaultLanguage } from '../config/const'
import { getData } from '../tools/localStorage'

export default function useLocalStorage () {
  const { setLanguage } = useLanguage()
  const { login } = useSession()
  const { loadCharacters } = useCharacters()

  const loadLocalStorage = () => {
    const language = getData(localStorageKeys.appLanguage) || defaultLanguage
    setLanguage(language)

    const session = getData(localStorageKeys.appSession)
    !!session && login(JSON.parse(session), false)

    const galery = getData(localStorageKeys.appGalery)
    !!galery && loadCharacters(JSON.parse(galery))
  }

  return { loadLocalStorage }
}
