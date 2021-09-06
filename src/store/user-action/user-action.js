import { createReducer } from '@reduxjs/toolkit';
import { saveResult, clearHistory } from '../action';

const MAX_HISTORY_LENGTH = 10;

const initialState = {
  resultsHistory: [],
};

const userAction = createReducer(initialState, (builder) => {
  builder
    .addCase(saveResult, (state, action) => {
      if (state.resultsHistory.length === MAX_HISTORY_LENGTH) {
        state.resultsHistory.shift();
      }
      state.resultsHistory.push(action.payload);
    })
    .addCase(clearHistory, (state) => {
      state.resultsHistory = [];
    });
});

export {
  userAction
};
