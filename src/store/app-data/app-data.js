import { createReducer } from '@reduxjs/toolkit';
import { getExchangeRates } from '../action';

const initialState = {
  rates: {},
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(getExchangeRates, (state, action) => {
      state.rates = action.payload;
    });
});

export {
  appData
};
