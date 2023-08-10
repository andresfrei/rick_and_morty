import { ImCross } from 'react-icons/im'
import { styled } from 'styled-components'
import styles from './styles.module.css'

import { colors } from '../../config/theme'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => props.width || '100%'};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background: ${colors.modalBackgraund};
  z-index: 800; 
`
const Box = styled.div`
  background: rgba(255,255,255, .1);
  padding: 1rem 2.5rem;
  border-radius: 15px;
  border: ${props => props.border || 'none'};
  width: ${props => props.width || '300px'} ;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  color: white;
  text-align: center;
`

export const ModalSection = styled.div`

`

export const BtnClose = styled.button`

`

export default function ModalBox (props) {
  const { title, onClose, children, width, border, color } = props

  const style = {
    color: color || colors.primary
  }

  return (
    <Container >
      <Box
        border= {border}
        color ={color}
        width = {width}
      >
        <ImCross style={style} className={styles.modalBtnClose} onClick={onClose}/>
        <h3 style={style}>{title}</h3>
        {children}
      </Box>
    </Container>
  )
}
