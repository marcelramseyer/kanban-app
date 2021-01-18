import authReducer from './authReducer';
import tasksReducer from './tasksReducer';
import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import asyncReducer from './asyncReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  modals: modalReducer,
  async: asyncReducer,
});

export default rootReducer;
