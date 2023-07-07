import { styled } from 'styled-components'

import { colors } from '../../config/theme'

export const ContainerToggle = styled.div`
  position:absolute;
  display:flex;
  flex-direction: column;
  top: 80px;
  right: -25px;
  width:${props => props.width || '150px'};
  background: #444444;
  object-fit:cover;
  box-sizing: 0 5px 25px ${colors.dark};
  border-radius: 15px;
  transition: 0.5s;
  &::before{
    content: '';
    position: absolute;
    top:-10px;
    right: 39px;
    width: 20px;
    height: 20px;
    background: #444444;
    transform: rotate(45deg);
  }
`

export const ItemToggle = styled.div`
  display:flex;
  padding: 15px 20px;
  font-weight: 300;
  text-align: ${props => props.align || 'end'};
  transition: 0.5s;
  color: ${colors.lightFont};
  &::hover {
    background :${props => props.color || colors.grey};
    cursor:pointer;
  }
`

export const TitleToggle = styled.h4`
  padding: 15px 15px;
  color: ${props => props.color || colors.primary};
  text-align: center;
`
export const MenuToggle = (props) => {
  const { title, backgraund, children } = props
  return (
    <ContainerToggle backgraund = {backgraund}>
      {!!title && <TitleToggle>{title}</TitleToggle>}
      {children}
    </ContainerToggle>
  )
}
