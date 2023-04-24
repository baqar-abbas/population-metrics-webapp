import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import nations from './nations/nationsslice';

const reducers = combineReducers({
  nationReducer: nations,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
