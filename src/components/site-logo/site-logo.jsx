import React from 'react';
import styles from './styles.module.scss';

function SiteLogo() {
  return (
    <a className={styles['logo-link']} href="/">
      <img src="img/site-logo.svg" width="149" height="25" alt="Логотип «Лига Банк»"/>
    </a>
  );
}

export default SiteLogo;
