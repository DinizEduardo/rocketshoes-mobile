import { combineReducers } from 'redux';

import cart from './cart/reducer'; // para adicionar outros reducer só criar outra pasta e o arquivo

export default combineReducers({
  cart,
});
