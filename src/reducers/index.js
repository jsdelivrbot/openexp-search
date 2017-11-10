import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';

const rootReducer = combineReducers({
  experiment: SearchReducer
});

export default rootReducer;
