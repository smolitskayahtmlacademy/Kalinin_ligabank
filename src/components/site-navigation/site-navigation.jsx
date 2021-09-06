import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

function SiteNavigation() {
  return (
    <nav className={classNames(styles['header__nav'], styles['site-navigation'])}>
      <ul className={styles['site-navigation__list']}>
        <li><a className={styles['site-navigation__link']} href="services">Услуги</a></li>
        <li><a className={styles['site-navigation__link']} href="credit">Рассчитать кредит</a></li>
        <li><span className={classNames(styles['site-navigation__link'], styles['site-navigation__link--active'])}>Конвертер валют</span></li>
        <li><a className={styles['site-navigation__link']} href="contacts">Контакты</a></li>
        <li><a className={styles['site-navigation__link']} href="ask">Задать вопрос</a></li>
      </ul>
    </nav>
  );
}

export default SiteNavigation;
