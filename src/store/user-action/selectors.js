import { NameSpace } from '../root-reducer';

const getHistory = (state) => state[NameSpace.USER].history;

export {
  getHistory
};
