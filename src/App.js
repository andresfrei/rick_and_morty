import './App.css'
import ParticlesBackgraund from './components/ParticlesBackgraund/ParticlesBackgraund'
import Cards from './components/Cards/Cards'
import Navbar from './components/Navbar/Navbar'
import useCharacters from './hooks/useCharacters'

function App () {
  const { showCharacters, handleSearch } = useCharacters()
  return (
    <div className='App'>
      <ParticlesBackgraund/>
      <Navbar handleSearch={handleSearch}/>
      <Cards characters = {showCharacters} />
    </div>
  )
}
export default App
