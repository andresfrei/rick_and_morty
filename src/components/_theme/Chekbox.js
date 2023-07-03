import styled from 'styled-components'

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  user-select: none;
`

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked ~ .checkmark {
    background-color: #007bff;
    border-color: #007bff;
  }

  &:checked ~ .checkmark:after {
    display: block;
  }
`

const Checkmark = styled.span`
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid #adb5bd;
  border-radius: 3px;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`

const CheckboxLabel = styled.span`
  margin-left: 8px;
`

export default function Checkbox () {
  return (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" />
      <Checkmark className="checkmark" />
      <CheckboxLabel>Checkbox</CheckboxLabel>
    </CheckboxContainer>
  )
}
