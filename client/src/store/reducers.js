import CounterReducer from './CartReducer';
import Logged from './Logged';
import {combineReducers} from 'redux';


const Reducers=combineReducers({
    cartItems:CounterReducer,
    logged:Logged,
   
})

export default Reducers;