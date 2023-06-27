import './App.css'
import ParticlesBackgraund from './components/ParticlesBackgraund/ParticlesBackgraund'
import Cards from './components/Cards/Cards'
import Navbar from './components/Navbar/Navbar'
import characters from './data.js'

function App () {
  return (
    <div className='App'>
      <ParticlesBackgraund/>
      <Navbar/>
      <Cards characters = {characters} />
    </div>
  )
}
// <SearchBar onSearch={(characterID) => window.alert(characterID)} />
export default App
