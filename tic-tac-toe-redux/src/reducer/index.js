import {combineReducers} from 'redux';
import Names from './reducer-person';

const allReducer = combineReducers({
  users: Names
})

export default allReducer;
