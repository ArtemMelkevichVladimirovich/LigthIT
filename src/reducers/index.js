import { combineReducers } from 'redux';
import product from './product';
import list from './listProduct';

export default combineReducers({
    product,
    list,
});