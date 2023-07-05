import { styled } from 'styled-components'

const ToogleGrup = styled.div`
  position:relative;
`
const ToggleHeader = styled.div`

`

const ToggleMenu = styled.div`
  position:absolute
`
const ToggleOption = styled.h4`
  padding:5px;
`

export default function ToogleComponent (props) {
  const options = {
    ...props
  }

  return (
  <ToogleGrup>
      <ToggleHeader>
      {options.title}
    </ToggleHeader>
    <ToggleMenu>
      { options.map((item, index) => (
        <ToggleOption key={index}>{item}</ToggleOption>
      )) }
    </ToggleMenu>
  </ToogleGrup>
  )
}
