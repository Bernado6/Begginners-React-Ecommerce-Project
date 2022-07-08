import { combineReducers } from 'redux';
import { productReducer } from './product-reducer';

const reducers = combineReducers({
    productReducer:productReducer
});

export default reducers;