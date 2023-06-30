import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import styles from './navbar.module.css'
import LenguageSelector from '../LenguageSelector/LenguageSelector'

const Navbar = ({ handleSearch, dictionary }) => {
  return (
    <nav >
      <div className={styles.container}>
        <Logo/>
        <SearchBar handleSearch={handleSearch} dictionary = {dictionary}/>
        <LenguageSelector dictionary = {dictionary}/>
      </div>
    </nav>
  )
}

export default Navbar
