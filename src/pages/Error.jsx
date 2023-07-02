import { useRouteError } from 'react-router-dom'
import { OutlineButton } from '../components/_theme/Buttons'

import { colorPrimary, colorSecundary } from '../config/colors'

const Error = () => {
  const error = useRouteError()
  const handleHome = () => window.alert('back to home')
  return (
    <div className='error_container'>
      <h1>{error.status}</h1>
      <h3>{error.statusText}</h3>
      <OutlineButton color={colorPrimary} background={colorSecundary} onClick={handleHome} >
            Back to home
      </OutlineButton>
    </div>
  )
}

export default Error
