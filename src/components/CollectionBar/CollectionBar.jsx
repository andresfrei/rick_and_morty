import useLanguage from '../../hooks/useLanguage'
import useToggle from '../../hooks/useToggle'
import useCharacters from '../../hooks/useCharacters'

import CollectionSearch from './CollectionSearch'

import { MdOutlineAdd } from 'react-icons/md'
import { NavigationButton } from '../_theme/Buttons'

import styles from './collectionBar.module.css'

export default function CollectionBar () {
  const { dictionaryWord } = useLanguage()
  const { hasCharacters } = useCharacters()
  const { handleToggle } = useToggle()
  return (
    <section className={styles.header}>
        <h2 className={styles.title}>{dictionaryWord('cards.title')}</h2>
        <div className={styles.toolsBar} >
          <div className={styles.toogleContainer}>
            <NavigationButton width='70px' onClick={() => handleToggle(3)}>
              <MdOutlineAdd />
            </NavigationButton>
          </div>
          { hasCharacters && <CollectionSearch/> }
       </div>
    </section>
  )
}
