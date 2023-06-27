import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar} >
      <div className={styles.container}>
        <Logo/>
        <SearchBar/>
      </div>
    </nav>
  )
}

export default Navbar
