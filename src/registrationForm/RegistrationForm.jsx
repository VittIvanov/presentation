import React from "react";
import styles from "./RegistrationForm.module.css"

const RegistrationForm = () => {
  return (
    <React.Fragment>
      <div className={styles.openModal}>
        <button aria-label="войти на сайт" className={styles.openModalBtn}>Вход</button>
        <button aria-label="зарегистрироваться на сайте" className={styles.openModalBtn}>Регистрация</button>
      </div>
    </React.Fragment>
  )
}

export default RegistrationForm;

// <button id="openModalBtn">Open Registration Form</button>

{/* <div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div class="container">
      <h2>Registration Form</h2>
      <form id="registrationForm" action="#" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <input type="submit" value="Register">
      </form>
    </div>
  </div>
</div> */}
