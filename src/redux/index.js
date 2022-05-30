import { createStore, combineReducers } from 'redux';
import { calcReducer } from './reducers/calc';

const rootReducer = combineReducers({ calc: calcReducer });

const store = createStore(rootReducer);

export default store;
