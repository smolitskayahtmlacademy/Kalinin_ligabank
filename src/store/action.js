import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  GET_EXCHANGE_RATES: 'data/getExchangeRates',
  SAVE_RESULT: 'user/saveResult',
  CLEAR_HISTORY: 'user/clearHistory',
};

const getExchangeRates = createAction(ActionType.GET_EXCHANGE_RATES, (rates) => ({
  payload: rates,
}));

const saveResult = createAction(ActionType.SAVE_RESULT, (result) => ({
  payload: result,
}));

const clearHistory = createAction(ActionType.CLEAR_HISTORY);

export {
  ActionType,
  getExchangeRates,
  saveResult,
  clearHistory
};
