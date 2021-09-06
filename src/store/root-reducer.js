import { combineReducers } from 'redux';
import { appData } from './app-data/app-data';
import { userAction } from './user-action/user-action';

const NameSpace = {
  DATA: 'DATA',
  USER: 'USER',
};

const rootReducer = combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.USER]: userAction,
});

export { NameSpace };
export default rootReducer;
