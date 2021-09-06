const Currency = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  CNY: 'CNY',
};

const customSelectStyles = {
  indicatorSeparator: () => ({display: 'none'}),
  indicatorsContainer: () => ({display: 'none'}),
  valueContainer: () => ({
    padding: '9px 16px',
    width: '100%',
  }),
  control: () => ({
    border: '1px solid var(--black)',
    borderRadius: '4px',
  }),
  option: (provided) => ({
    ...provided,
    fontSize: '22px',
    lineHeight: '28px',
    cursor: 'pointer',
  }),
};

export {
  Currency,
  customSelectStyles
};
