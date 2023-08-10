import styles from './errorBox.module.css'
import ModalBox, { ModalSection } from '../_theme/ModalBox'
import useError from '../../hooks/useError'

import { OutlineButton } from '../_theme/Buttons'
import useLanguage from '../../hooks/useLanguage'

import { colors } from '../../config/theme'

export default function ErrorBox () {
  const { errors, cleanError } = useError()
  const { dictionaryWord } = useLanguage()
  return (
    <ModalBox
      title='Error'
      onClose = {cleanError}
      border ={`2px solid ${colors.alert}`}
      backgranund = {colors.dark}
      width = '400px'
    >
      <ModalSection className={styles.body}>
        {errors.map(error =>
          <h4
            key={error}
            className={styles.message}
          >
            <span>❌ </span>
            {dictionaryWord(`errors.${error}`)}
          </h4>
        )}
      </ModalSection>
      <ModalSection>
        <OutlineButton
          width = '200px'
          onClick={() => cleanError()}
        >
          {dictionaryWord('errors.close')}
        </OutlineButton>
      </ModalSection>
    </ModalBox>
  )
}
