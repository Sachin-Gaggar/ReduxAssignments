import {combineReducers} from 'redux';
import ApiReducer from './Services/reducer';

export default combineReducers({
  Api: ApiReducer,
});
