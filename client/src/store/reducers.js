import CounterReducer from './CounterReducer';
import Logged from './Logged';
import Auth from "./Auth";

import {combineReducers} from 'redux';


const Reducers=combineReducers({
    counter:CounterReducer,
    logged:Logged,
    auth:Auth,
})

export default Reducers;