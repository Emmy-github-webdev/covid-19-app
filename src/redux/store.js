import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import vacineReducer from './reducer/vacineReducer';

const reducer = combineReducers({
  vaccine: vacineReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
