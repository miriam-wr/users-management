import usersReducer from './users';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  users: usersReducer,
});

export default allReducers;
