import LocationAdress from "../locationAdress/LocationAdress";
import styles from "../wrappers/StyledWrapper.module.css"

const Footer = (props) => {
  return (
    <footer className={styles.styledLayotWrapper} {...props}>
      <LocationAdress />
    </footer>
  )
}

export default Footer
