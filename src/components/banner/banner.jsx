import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

function Banner(props) {
  const { className: bannerClassName } = props;

  return (
    <section className={classNames(styles.banner, bannerClassName)}>
      <div className={classNames(styles['banner__container'], 'container')}>
        <p className={styles['banner__text']}>
          <b className={styles['banner__title']}>Лига Банк</b>
          Кредиты на любой случай
          <a className={classNames(styles['banner__link'], 'btn')} href="credit">Рассчитать кредит</a>
        </p>
        <img className={styles['banner__image']} src="images/cards.png" width="1366" height="400" alt="Пластиковые карты «Лига Банк»" />
      </div>
    </section>
  );
}

Banner.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Banner;
