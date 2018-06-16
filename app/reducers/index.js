import { combineReducers } from 'redux';
import currencies from './currencies';

export default combineReducers({
  currencies,
  secondTest: () => Math.floor(Math.random() * Math.floor(7)),
});
