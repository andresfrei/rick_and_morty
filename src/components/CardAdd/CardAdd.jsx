import { useEffect, useRef } from 'react'
import useCardAdd from '../../hooks/useCardAdd'

import { OutlineButton } from '../_theme/Buttons'
import { SearchBar } from '../_theme/ButtonBar'
import ModalBox from '../_theme/ModalBox'
import useLanguage from '../../hooks/useLanguage'

export default function CardAdd () {
  const { handleAdd, handleRandom, handleToggle } = useCardAdd()
  const { dictionaryWord } = useLanguage()
  const defaultFocus = useRef(null)

  useEffect(() => {
    defaultFocus.current.focus()
  }, [])

  return (
    <ModalBox
      type = 'error'
      title={dictionaryWord('cards.add')}
      onClose = {() => handleToggle(3)}
    >
      <SearchBar
      placeholder ='ID'
      onInput = {handleAdd}
      focus = {defaultFocus}
      />
     <OutlineButton height='40px' onClick={handleRandom}>
        Randomn
      </OutlineButton>
    </ModalBox>
  )
}
