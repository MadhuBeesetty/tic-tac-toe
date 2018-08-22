import { combineReducers } from 'redux';
import Names from './reducer-person';
import SquareData from './square-data';

const allReducer = combineReducers({
  users: Names,
  squares: SquareData,
});

export default allReducer;
