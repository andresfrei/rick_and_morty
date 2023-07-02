import styles from './card.module.css'

const Property = ({ label, value }) => {
  return (
    <div className={styles.propLine}>
      <h5 className={styles.propLabel}>{label}</h5>
      <h5 className={styles.propValue}>{value}</h5>
    </div>
  )
}

export default Property
