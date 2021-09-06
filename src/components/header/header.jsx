import React from 'react';
import classNames from 'classnames';
import SiteLogo from '../site-logo/site-logo';
import SiteNavigation from '../site-navigation/site-navigation';
import UserNavigation from '../user-navigation/user-navigation';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={classNames(styles['header__container'], 'container')}>
        <SiteLogo/>
        <SiteNavigation/>
        <UserNavigation className={styles['header__user-navigation']}/>
      </div>
    </header>
  );
}

export default Header;
