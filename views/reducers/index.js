import { combineReducers } from 'redux';
import basket from './basket';
import products from './products';

const allReducers = combineReducers({
  basket: basket,
  products: products
});

export default allReducers;