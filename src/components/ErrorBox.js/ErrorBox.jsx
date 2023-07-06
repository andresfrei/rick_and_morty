import styles from './errorBox.module.css'
import ModalBox from '../_theme/ModalBox'
import useError from '../../hooks/useError'

import { OutlineButton } from '../_theme/Buttons'
import useLanguage from '../../hooks/useLanguage'

import { colors } from '../../config/theme'

export default function ErrorBox () {
  const { textError, cleanError } = useError()
  const { dictionaryWord } = useLanguage()
  return (
    <ModalBox
      title='Error'
      onClose = {cleanError}
      border ={`2px solid ${colors.alert}`}
      backgranund = {colors.dark}
    >
      <h3 className={styles.message}>{textError}</h3>
      <OutlineButton onClick={() => cleanError()}>
        {dictionaryWord('errors.close')}
      </OutlineButton>
    </ModalBox>
  )
}
