import { NameSpace } from '../root-reducer';

const getHistory = (state) => state[NameSpace.USER].resultsHistory;

export {
  getHistory
};
