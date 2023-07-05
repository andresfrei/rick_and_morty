import styled from 'styled-components'

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || '500px'};
  background: rgba(255, 255, 255, .2);
  border-radius: 15px;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left:2rem;
  padding-right:2rem;
`

export const FormHeader = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left:2rem;
  padding-right:2rem;
`

export const FormFooter = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap: 1rem;
  width:100%;
  align-items:center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const FormGrup = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  gap: 15px;
  width:100%;
`

export const FormInput = styled.input`
  background: rgba(255,255,255,0.2);
  width:${props => props.width};
  text-align:${props => props.textAlign || 'left'};
  height: 40px;
  border-radius: 12px;
  border: none;
  padding-left: 15px;
  font-size: 1.2rem;
  color: #fff;
  border-color: #fff;
  ::focus {
    border: 1px solid; 
  }
  ::placeholder{
    color: #999;
  }
`

export const FromLabel = styled.label`
  color: rgba(255,255,255,0.3);
  width:35%;
  text-align:left;
`

export const InputGrup = ({ type, name, label, placeholder, onChange, textAlign, onKeyPress, ref }) => {
  return (
    <FormGrup >
      {!!label && <FromLabel htmlFor={name}>{label}</FromLabel>}
      <FormInput
        name={name}
        type={type}
        placeholder={placeholder}
        textAlign={textAlign}
        onChange={onChange}
        width={!label ? '100%' : '65%'}
        onKeyPress={onKeyPress}
        ref={ref || null}
      />
    </FormGrup>
  )
}
