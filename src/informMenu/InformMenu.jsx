import styles from "./InformMenu.module.css"
import { useState, useRef, useEffect } from "react";


const InformMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false) // Состояние для отслеживания состояния списка
  const dropdownRef = useRef(null);

  // Обработчик события клика вне списка
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Функция для обработки события нажатия клавиши "Escape"
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    // Добавляем обработчики событий при монтировании компонента
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKeyPress)

    // Удаляем обработчики событий при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKeyPress);
    }

  }, []);

  // Обработчик клика на ссылку внутри списка
  const handleLinkClick = (event) => {
    // Остановка всплытия события, чтобы клик на ссылке не приводил к закрытию списка
    event.stopPropagation();
  };

  // Функция для переключения состояния списка
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  // {`arrow_${isOpen ? 'open' : 'closed'}`}

  return (
    <div className={styles.dropdown} onClick={toggleDropDown}>
      <div ref={dropdownRef} className={styles.arrow} />
      {!isOpen && (<div>
        <span className={styles.inform_list__closed}>доп.информация</span>
      </div>)}
      {isOpen && (
        <ul className={styles.inform_list}>
          {/*  Вставляем содержимое списка, если список открыт */}
          <li className={styles.inform_list__item}>
            <a href="#" onClick={handleLinkClick}>1 блок</a>
          </li>
          <li className={styles.inform_list__item}>
            <a href="#" onClick={handleLinkClick}>2 блок</a>
          </li>
          <li className={styles.inform_list__item}>
            <a href="#" onClick={handleLinkClick}>3 блок</a>
          </li>
          <li className={styles.inform_list__item}>
            <a href="#" onClick={handleLinkClick}>4 блок</a>
          </li>
        </ul>
      )}
    </div>
  )
}

export default InformMenu;
