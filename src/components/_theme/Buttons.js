import styled from 'styled-components'

export const OutlineButton = styled.button`
  width:100%;
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.color || 'blue'};
  color: ${props => props.color || 'blue'};
  background: none;
  cursor: pointer;
  transition: border-color 0.4s ease;
  border-radius: 5px;

  &:hover {
    border-color: ${props => props.background || 'blue'};
    color: ${props => props.background || 'blue'};
    background :${props => props.color || 'blue'};
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
