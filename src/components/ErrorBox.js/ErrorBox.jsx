import styles from './errorBox.module.css'
import ModalBox from '../_theme/Modal'
import useError from '../../hooks/useError'

import { OutlineButton } from '../_theme/Buttons'

export default function ErrorBox () {
  const { textError, cleanError } = useError()
  return (
    <ModalBox>
      <h1>{textError}</h1>
      <OutlineButton onClick={() => cleanError()}>
        Cerrar
      </OutlineButton>
    </ModalBox>
  )
}
