import { createReducer } from '@reduxjs/toolkit';
import { saveResult, clearHistory } from '../action';

const MAX_HISTORY_LENGTH = 10;

const initialState = {
  history: [],
};

const userAction = createReducer(initialState, (builder) => {
  builder
    .addCase(saveResult, (state, action) => {
      if (state.history.length === MAX_HISTORY_LENGTH) {
        state.history.shift();
      }
      state.history.push(action.payload);
    })
    .addCase(clearHistory, (state) => {
      state.history = [];
    });
});

export {
  userAction
};
