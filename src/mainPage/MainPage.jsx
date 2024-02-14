import React from "react";
import styles from "./MainPage.module.css"
// import BtnWrapper from "../wrappers/btnWrapper/BtnWrapper";

const MainPage = () => {
  return (
    <React.Fragment>
      <div className={styles.mainPage}>
        <div className={styles.сontainer}>
          <h1>Это наш заголовок</h1>
          <h2>Это описание к нему</h2>
          <b>Здесь список причин, почему удобно и приятно работать именно с нами:</b>
          <ul>
            <li>1-я Причина</li>
            <li>2-я Причина</li>
            <li>3-я Причина</li>
            <li>4-я Причина</li>
            <li>5-я Причина</li>
            <li>6-я Причина</li>
            <li>7-я Причина</li>
          </ul>
        </div>
        <section className={styles.сontainer} aria-label="здесь можно оставить свой отзыв или раказ по новому виду дизайна">
          <span>здесь можно оставить свой отзыв или раказ по новому виду дизайна:</span>
          <form >
            <textarea className={styles.submitText} rows="5" cols="50"></textarea>
            <br />
            {/* <BtnWrapper> */}
            <input className={styles.submitBtn} type="submit" value="Submit" />
            {/* </BtnWrapper> */}
          </form>
        </section>
      </div>
    </React.Fragment>
  )
}
export default MainPage;
