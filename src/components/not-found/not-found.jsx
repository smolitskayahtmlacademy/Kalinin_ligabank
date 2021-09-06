import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './styles.module.scss';

function NotFound() {
  return (
    <div className={styles.page}>
      <Header/>
      <main className={styles['not-found']}>
        <img src="img/404.svg" alt="404 Not Found" />
      </main>
      <Footer/>
    </div>
  );
}

export default NotFound;
