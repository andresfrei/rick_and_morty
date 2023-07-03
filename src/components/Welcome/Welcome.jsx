import useLanguage from '../../hooks/useLanguage'
import FormLogin from '../FormLogin/FormLogin'

const Welcome = () => {
  const { dictionaryWord } = useLanguage()

  return (
    <div className='flex-center'>
      <h1>{dictionaryWord('welcome.title')}</h1>
      <h2>{dictionaryWord('welcome.subTitle')}</h2>
      <FormLogin/>
    </div>
  )
}

export default Welcome
