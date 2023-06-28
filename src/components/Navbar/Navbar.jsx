import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import styles from './navbar.module.css'

const Navbar = ({ handleSearch }) => {
  return (
    <nav >
      <div className={styles.container}>
        <Logo/>
        <SearchBar handleSearch={handleSearch}/>
      </div>
    </nav>
  )
}

export default Navbar
