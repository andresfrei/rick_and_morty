import styles from './searchBar.module.css'
import { IoIosAddCircle } from 'react-icons/io'

export default function SearchBar (props) {
  return (
      <div className={styles.container}>
         <input type='search' placeholder='Insert ID add' className={styles.input} />
         <IoIosAddCircle className={styles.icon}/>
      </div>
  )
}
