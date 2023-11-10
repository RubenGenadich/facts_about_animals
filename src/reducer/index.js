import { combineReducers } from 'redux';
import cats from './cats/index';

const rootReducer = combineReducers({
  cats,
});

export default rootReducer;
