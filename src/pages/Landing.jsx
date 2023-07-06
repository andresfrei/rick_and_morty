import useLanguage from '../hooks/useLanguage'
import FormLogin from '../components/FormLogin/FormLogin'
const Landing = () => {
  const { dictionaryWord } = useLanguage()
  return (
    <section className='flex-column page-margin-top'>
      <h1>{dictionaryWord('welcome.title')}</h1>
      <h2>{dictionaryWord('welcome.subTitle')}</h2>
      <FormLogin/>
    </section>
  )
}

export default Landing
