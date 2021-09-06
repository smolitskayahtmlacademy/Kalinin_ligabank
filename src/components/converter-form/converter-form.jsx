/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { subDays, format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { Currency, customSelectStyles } from '../../const';
import { getExchangeRates } from '../../store/app-data/selectors';
import { saveResult } from '../../store/action';
import { fetchExchangeRates } from '../../store/api-actions';
import { convert } from '../../utils';
import styles from './styles.module.scss';

const CURRENCY_OPTIONS = [
  { value: Currency.RUB, label: Currency.RUB },
  { value: Currency.USD, label: Currency.USD },
  { value: Currency.EUR, label: Currency.EUR },
  { value: Currency.GBP, label: Currency.GBP },
  { value: Currency.CNY, label: Currency.CNY },
];

const today = new Date();

const DateRange = {
  MIN: subDays(today, 6),
  MAX: today,
};

const DefaultState = {
  NUMBER_FROM: 1000,
  CURRENCY_FROM: CURRENCY_OPTIONS[0],
  CURRENCY_TO: CURRENCY_OPTIONS[1],
};

function ConverterForm(props) {
  const rates = useSelector(getExchangeRates);

  const { className: formClassName } = props;
  const [currencyFrom, setCurrencyFrom] = useState(DefaultState.CURRENCY_FROM);
  const [currencyTo, setCurrencyTo] = useState(DefaultState.CURRENCY_TO);
  const [numberFrom, setNumberFrom] = useState(DefaultState.NUMBER_FROM);
  const [numberTo, setNumberTo] = useState('');
  const [selectedDate, setSelectedDate] = useState(today);
  const dispatch = useDispatch();
  let historyCount = 0;

  useEffect(() => {
    setNumberTo(convert(numberFrom, rates[currencyFrom.value], rates[currencyTo.value]));
  }, [setNumberTo, rates, currencyFrom, currencyTo]);

  function handleSelectChange(selectedOption) {
    if (this.id === 'currencyFrom') {
      setCurrencyFrom(selectedOption);
    } else {
      setCurrencyTo(selectedOption);
    }
  }
  const handleInputChange = (evt) => {
    const input = evt.target;
    if (input.id === 'sell') {
      setNumberFrom(input.value);
      setNumberTo(convert(input.value, rates[currencyFrom.value], rates[currencyTo.value]));
    } else {
      setNumberTo(input.value);
      setNumberFrom(convert(input.value, rates[currencyTo.value], rates[currencyFrom.value]));
    }
  };

  const handleDateChange = (date) => {
    dispatch(fetchExchangeRates(format(date, 'yyyy-MM-dd')));
    setSelectedDate(date);
  };

  const handleSaveButtonClick = (evt) => {
    evt.preventDefault();
    historyCount++;
    dispatch(saveResult({
      id: historyCount,
      date: format(selectedDate, 'd.MM.yyyy'),
      currencyFrom: currencyFrom.value,
      currencyTo: currencyTo.value,
      numberFrom: numberFrom,
      numberTo: numberTo,
    }));
  };

  return (
    <form className={classNames(styles['converter-form'], formClassName)} action="#">
      <div className={styles['converter-form__field']}>
        <label className={styles['convert-form__label']} htmlFor="sell">
          У меня есть
        </label>
        <input
          className={styles['converter-form__input-text']}
          type="number"
          name="sell"
          id="sell"
          value={numberFrom}
          onChange={handleInputChange}
        />
        <Select
          id='currencyFrom'
          className={styles['converter-form__select']}
          styles={customSelectStyles}
          options={CURRENCY_OPTIONS}
          isSearchable={false}
          value={currencyFrom}
          onChange={handleSelectChange}
        />
      </div>
      <div className={styles['converter-form__field']}>
        <label className={styles['convert-form__label']} htmlFor="buy">
          Хочу приобрести
        </label>
        <input
          className={styles['converter-form__input-text']}
          type="number"
          name="buy"
          id="buy"
          value={numberTo}
          onChange={handleInputChange}
        />
        <Select
          id='currencyTo'
          className={styles['converter-form__select']}
          styles={customSelectStyles}
          options={CURRENCY_OPTIONS}
          isSearchable={false}
          value={currencyTo}
          onChange={handleSelectChange}
        />
      </div>
      <div className={styles['converter-form__field']}>
        <DatePicker
          className={styles['converter-form__datepicker']}
          dateFormat="d.MM.yyyy"
          locale={ru}
          minDate={DateRange.MIN}
          maxDate={DateRange.MAX}
          selected={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <button
        className={classNames(styles['converter-form__result-btn'], 'btn')}
        type="button"
        onClick={handleSaveButtonClick}
      >
        Сохранить результат
      </button>
    </form>
  );
}

ConverterForm.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ConverterForm;
