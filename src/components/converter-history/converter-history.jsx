import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getHistory } from '../../store/user-action/selectors';
import styles from './styles.module.scss';
import { clearHistory } from '../../store/action';

function ConverterHistory(props) {
  const { className: titleClassName } = props;
  const converterHistory = useSelector(getHistory);
  const dispatch = useDispatch();

  const handleClearButtonClick = (evt) => {
    evt.preventDefault();

    if (converterHistory.length > 0) {
      dispatch(clearHistory());
    }
  };

  if (converterHistory.length === 0) {
    return (
      <section className={styles['converter-history']}>
        <h2 className={titleClassName}>История конвертации</h2>
        <p>Нет сохранённых результатов</p>
      </section>
    );
  }

  return (
    <section className={styles['converter-history']}>
      <h2 className={titleClassName}>История конвертации</h2>
      <table className={styles['converter-history__table']}>
        <tbody>
          {
            converterHistory.map((result) => (
              <tr key={result.id}>
                <td>{result.date}</td>
                <td className={styles['converter-history__number']}>{result.numberFrom} {result.currencyFrom}</td>
                <td >{result.numberTo} {result.currencyTo}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button
        className={classNames(styles['converter-history__clear-btn'], 'btn')}
        type="button"
        onClick={handleClearButtonClick}
      >
        Очистить историю
      </button>
    </section>
  );
}

ConverterHistory.propTypes = {
  className: PropTypes.string.isRequired,
};


export default ConverterHistory;
