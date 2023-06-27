import './App.css'
import Cards from './components/Cards/Cards'
import SearchBar from './components/SearchBar/SearchBar'
import characters from './data.js'

function App () {
  return (
    <div className='App'>
        <SearchBar/>
        <Cards characters = {characters} />
    </div>
  )
}
// <SearchBar onSearch={(characterID) => window.alert(characterID)} />
export default App
