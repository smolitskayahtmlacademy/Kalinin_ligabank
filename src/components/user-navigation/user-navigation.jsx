import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

function UserNavigation(props) {
  const { className: userNavClassName } = props;

  return (
    <ul className={classNames(styles['user-navigation'], userNavClassName)}>
      <li>
        <a className={classNames(styles['user-navigation__link'], styles['user-navigation__link--login'])} href="login">
          <svg width="20" height="22">
            <use href="#login-icon"/>
          </svg>
          Войти в Интернет-банк
        </a>
      </li>
    </ul>
  );
}

UserNavigation.propTypes = {
  className: PropTypes.string,
};

export default UserNavigation;
