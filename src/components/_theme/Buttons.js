import styled from 'styled-components'

import { colorGrey } from '../../config/colors'
const colorPrimary = '#fff'

export const OutlineButton = styled.button`
  width:${props => props.width || '100%'};
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.color || colorPrimary};
  color: ${props => props.color || colorPrimary};
  background: none;
  cursor: pointer;
  transition: border-color 0.4s ease;
  border-radius: 10px;

  &:hover {
    border-color: ${props => props.background || colorPrimary};
    color: ${props => props.background || colorGrey};
    background :${props => props.color || colorPrimary};
  }
`
export const NavigationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || '150px'};
  height: 50px;
  border-radius: 60px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: border-color 0.4s ease;
  color: ${props => props.color || '#ffffff80'};
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`

/* display:flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: border-color 0.4s ease;
  color: ${props => props.color || '#ffffff80'};
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  } */
