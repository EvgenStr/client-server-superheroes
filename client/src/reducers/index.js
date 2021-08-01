import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import taskReducer from './taskReducer';
import heroReducer from './heroReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  tasks: taskReducer,
  heroes: heroReducer,
});

export default rootReducer;
