import DoctorsReducer from './doctors_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    doctors: DoctorsReducer
})

export default RootReducer;