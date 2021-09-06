import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';

function SiteNavigation() {
  return (
    <nav className={classNames(styles['header__nav'], styles['site-navigation'])}>
      <ul className={styles['site-navigation__list']}>
        <li><NavLink to={AppRoute.SERVICES} activeClassName={styles['site-navigation__link--active']} className={styles['site-navigation__link']}>Услуги</NavLink></li>
        <li><NavLink to={AppRoute.CREDIT} activeClassName={styles['site-navigation__link--active']} className={styles['site-navigation__link']}>Рассчитать кредит</NavLink></li>
        <li><NavLink to={AppRoute.CONVERTER} activeClassName={styles['site-navigation__link--active']} className={classNames(styles['site-navigation__link'])}>Конвертер валют</NavLink></li>
        <li><NavLink to={AppRoute.CONTACTS} activeClassName={styles['site-navigation__link--active']} className={styles['site-navigation__link']}>Контакты</NavLink></li>
        <li><NavLink to={AppRoute.ASK} activeClassName={styles['site-navigation__link--active']} className={styles['site-navigation__link']}>Задать вопрос</NavLink></li>
      </ul>
    </nav>
  );
}

export default SiteNavigation;
