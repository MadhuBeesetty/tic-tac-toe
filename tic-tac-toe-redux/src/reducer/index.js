import {combineReducers} from 'redux';
import Player from './reducer-person';

const allReducer = combineReducers({
  users: Player
})

export default allReducer;
