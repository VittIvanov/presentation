import React from "react"
import styles from "../wrappers/StyledWrapper.module.css"
import Navigation from "../navigation/Navigation";
import RegistrationForm from "../registrationForm/RegistrationForm";

const Header = () => {
  return (
    <header className={styles.styledLayotWrapper}>
      <Navigation />
      <RegistrationForm />
    </header>
  )
}

export default Header;
