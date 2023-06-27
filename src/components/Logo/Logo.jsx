import logo from '../../assets/logo_rym.svg'
import styles from './logo.module.css'

const Logo = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="Rick and Morty logo" />
    </div>
  )
}

// <p className={styles.creator}>by andresfrei-PT14a</p>

export default Logo
