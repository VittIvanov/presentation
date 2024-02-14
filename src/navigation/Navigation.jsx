import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import AppRoute from '../const/AppRoute';

const Navigation = (props) => {
  return (
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <Link to={AppRoute.MainPage}>Главная</Link>
      </li>
      <li className={styles.nav__item}>
        <Link className={styles.nav__item_link} to={AppRoute.NiceGallery}>NatureGallery</Link>
      </li>
      <li className={styles.nav__item}>
        <Link to={AppRoute.Secondary}>Второстепенная</Link>
      </li>
      <li className={styles.nav__item}>
        <Link to={AppRoute.Secondary}>Второстепенная</Link>
      </li>
    </ul>
  );
}

export default Navigation;
