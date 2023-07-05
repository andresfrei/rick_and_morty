import { ImCross } from 'react-icons/im'
import { styled } from 'styled-components'
import styles from './styles.module.css'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background: rgba(0, 0, 0, 0.9);
  z-index: 800; 
`
const Box = styled.div`
  background: rgba(255,255,255, .1);
  padding: 1rem 2.5rem;
  border-radius: 15px;
  width: 300px ;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  color: white;
  text-align: center;
`
export const BtnClose = styled.button`

`

export default function ModalBox (props) {
  const { onClose } = props
  return (
    <Container>
      <ImCross
        className={styles.modalBtnClose}
        onClick={onClose}
      />
      <Box>
      </Box>
    </Container>
  )
}
