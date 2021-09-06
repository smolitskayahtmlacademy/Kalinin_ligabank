import React from 'react';
import classNames from 'classnames';
import SiteLogo from '../site-logo/site-logo';
import styles from './styles.module.scss';

function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={classNames(styles['footer__container'], 'container')}>
        <section className={styles['footer__info']}>
          <SiteLogo/>
          <p>
            150015, г. Москва, ул. Московская, д. 32<br/>
            Генеральная лицензия Банка России №1050<br/>
            &copy; Лига Банк, 2019
          </p>
        </section>
        <ul className={styles['footer__navigation']}>
          <li><a className={styles['footer__navigation-link']} href="services">Услуги</a></li>
          <li><a className={styles['footer__navigation-link']} href="credit">Рассчитать кредит</a></li>
          <li><a className={styles['footer__navigation-link']} href="contacts">Контакты</a></li>
          <li><a className={styles['footer__navigation-link']} href="ask">Задать вопрос</a></li>
        </ul>
        <a className={classNames(styles['footer__phone-link'], styles['footer__phone-link--short-number'])} href="tel:*0904">
          <svg width="10" height="16">
            <use href="#phone-icon"/>
          </svg>
          <b>*0904</b>
          Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
        </a>
        <a className={classNames(styles['footer__phone-link'], styles['footer__phone-link--long-number'])} href="tel:88001112233">
          <svg width="16" height="16">
            <use href="#call-icon"/>
          </svg>
          <b>8 800 111 22 33</b>
          Бесплатный для всех городов России
        </a>
        <ul className={styles['footer__socials']}>
          <li>
            <a className={styles['footer__socials-link']} href="https://www.facebook.com/academy.liga/">
              <svg width="9" height="16">
                <use href="#facebook-icon"/>
              </svg>
            </a>
          </li>
          <li>
            <a className={styles['footer__socials-link']} href="https://www.instagram.com/ligaacademy/">
              <svg width="16" height="16">
                <use href="#instagram-icon"/>
              </svg>
            </a>
          </li>
          <li>
            <a className={styles['footer__socials-link']} href="https://twitter.com/academy_liga">
              <svg width="16" height="13">
                <use href="#twitter-icon"/>
              </svg>
            </a>
          </li>
          <li>
            <a className={styles['footer__socials-link']} href="https://www.youtube.com/channel/UChUxTMjJGo-JDRY8pNTGL2g">
              <svg width="16" height="13">
                <use href="#youtube-icon"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
