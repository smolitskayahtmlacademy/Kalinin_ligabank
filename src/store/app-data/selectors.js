import { NameSpace } from '../root-reducer';

const getExchangeRates = (state) => state[NameSpace.DATA].rates;

export {
  getExchangeRates
};
