import { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { styled } from 'styled-components'
import { colors } from '../../config/theme'
// import useError from '../../hooks/useError'

export const ContainerBar = styled.div`
  width:${props => props.width || '100%'};
  max-height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 60px;
  padding: 20px 20px;
  display: flex;
  align-items: center;
`
export const InputBar = styled.input`
  flex: 1;
  background: transparent;
  border: 0;
  outline: none;
  width:${props => props.width || '100%'};
  padding:${props => props.padding || '24px, 2px'} ;
  padding-left: ${props => props.paddingLeft || '15px'} ;
  padding-right: ${props => props.paddingRigth || 'none'} ;
  color: ${colors.lightFont};
  width: 80%;
`

export const SearchBar = (props) => {
  const { type, placeholder, onInput, focus, preventDefault = false } = props
  // const { cleanError } = useError()
  const [input, setInput] = useState()

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'Enter' || 'Tab':
        handleClick()
        // setInput('')
   /*      break
      case 'Backspace' || 'Delete':
        cleanError()
        break */
    }
  }
  const handleClick = () => {
    onInput(input)
    !preventDefault && setInput('')
  }
  const handleChange = (event) => setInput(event.target.value)

  return (
    <ContainerBar>
      <InputBar
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={input}
        ref = {focus || null}
      />
      <IoIosSearch
        onClick={handleClick}
        className='cursor-pointer'
      />
    </ContainerBar>
  )
}
