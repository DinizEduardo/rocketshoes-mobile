import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { Alert } from 'react-native';
import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';
// import console = require('console');

function* addToCart({ id }) {
  const productIndex = yield select(state => state.cart.find(p => p.id === id));

  const stockResponse = yield call(api.get, `/stock/${id}`);
  const stockAmount = stockResponse.data.amount;

  const currentAmount = productIndex ? productIndex.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('', 'Quantidade solicitada fora de estoque.');
    return;
  }

  if (productIndex) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    yield put(addToCartSuccess(response.data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('', 'Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
