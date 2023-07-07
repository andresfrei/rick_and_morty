import useLanguage from '../../hooks/useLanguage'

export default function About () {
  const { dictionaryWord } = useLanguage()
  return (
    <div className='flex-center'>
      <h2>{dictionaryWord('about.welcome')}</h2>

    </div>
  )
}
