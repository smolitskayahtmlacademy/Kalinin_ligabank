import React from 'react';
import classNames from 'classnames';
import Header from '../header/header';
import Banner from '../banner/banner';
import ConverterForm from '../converter-form/converter-form';
import ConverterHistory from '../converter-history/converter-history';
import Footer from '../footer/footer';
import styles from './styles.module.scss';

function ConverterScreen() {
  return (
    <div className={styles.page}>
      <Header/>
      <main>
        <Banner className={styles['page__banner']}/>
        <section className={classNames(styles['page__container'], 'container')}>
          <h1 className={styles['page__title']}>Конвертер валют</h1>
          <ConverterForm className={styles['page__converter-form']}/>
          <ConverterHistory className={styles['page__subtitle']}/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default ConverterScreen;
