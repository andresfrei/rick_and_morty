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
      <Navbar dictionary= {dictionary} />
      <Cards
        characters = {showCharacters}
        dictionary= {dictionary}
        handleSearch={handleSearch}
      />
    </div>
  )
}
export default App
