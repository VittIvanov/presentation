import styles from "./BtnWrapper.module.css"

const BtnWrapper = ({ children }) => {
  return (
    <div className={styles.button}>
      {children}
    </div>
  )
}
export default BtnWrapper;
