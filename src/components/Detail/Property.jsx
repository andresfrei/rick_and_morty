import styles from './property.module.css'

const Property = ({ label, value }) => {
  return (
    <div className={styles.propLine}>
      <h3 className={styles.propLabel}>{label}</h3>
      <h3 className={styles.propValue}>{value}</h3>
    </div>
  )
}

export default Property
