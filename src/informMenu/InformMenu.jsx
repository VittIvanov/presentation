import styles from "./InformMenu.module.css"
import { useState } from "react";


const InformMenu = () => {
  const [isOpen, setIsOpen] = useState(false) // Состояние для отслеживания состояния списка

  // Функция для переключения состояния списка
  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.dropdown} onClick={toggleDropDown}>
      <div className={`arrow_${isOpen ? 'open' : 'closed'}`} />
      {!isOpen && (<div>
        <span>доп.информация</span>
      </div>)}
      {isOpen && (
        <ul className={styles.inform_list}>
          {/*  Вставляем содержимое списка, если список открыт */}
          <li className={styles.inform_list__item}>1 блок</li>
          <li className={styles.inform_list__item}> 2 блок</li>
          <li className={styles.inform_list__item}>3 блок</li>
          <li className={styles.inform_list__item}>4 блок</li>
        </ul>
      )}
    </div>
  )
}

export default InformMenu;
