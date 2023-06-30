import './App.css'
import ParticlesBackgraund from './components/ParticlesBackgraund/ParticlesBackgraund'
import Cards from './components/Cards/Cards'
import Navbar from './components/Navbar/Navbar'
import useCharacters from './hooks/useCharacters'
import useDictionary from './hooks/useDictionary'

function App () {
  const { showCharacters, handleSearch } = useCharacters()
  const dictionary = useDictionary()
  return (
    <div className='App'>
      <ParticlesBackgraund/>
      <Navbar handleSearch={handleSearch} dictionary= {dictionary} />
      <Cards characters = {showCharacters} dictionary= {dictionary}/>
    </div>
  )
}
export default App
