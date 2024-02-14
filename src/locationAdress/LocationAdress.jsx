import styles from './LocationAdress.module.css';
const LocationAdress = () => {
  return (
    <div className={styles.contactInfo}>
      <b>Наши контактные данные:</b>
      <address className={styles.address}>
        <p>Адрес: 123 Улица, Город, Страна</p>
      </address>
      <p className={styles.phone}>Телефон: <a href="tel:+123456789">+1 (234) 567-89</a></p>
    </div>
  )
}

export default LocationAdress;
