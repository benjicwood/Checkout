import * as types from '../actions/types';

export default function basket (initialState = {}, action) {
  const newState = Object.assign([], initialState);
  switch (action.type) {
    case types.SET_ITEM_IN_BASKET: return selectItem(newState, action.selectedProduct);
    case types.BOGOF_OFFER: return bogofOffer(newState, action.selectedProduct);
    default: return newState;
  }
}

function selectItem (newState, product) {
  if (!newState.basket) newState.basket = [];
  if (!newState.total) newState.total = 0;
  if (!newState.discount) newState.discount = 0;

  if (newState.basket.indexOf(product) === -1) {
    product.qty = 1;
    newState.basket.push(product);
  } else {
    product.qty += 1;
  }
  if (product.code === 'G95') {
    const asparagusInBasket = newState.basket.find(product => product.code === 'G95').qty;
    const pairsOfAsparagusInBasket = asparagusInBasket % 2;
    if (pairsOfAsparagusInBasket === 0) {
      newState.total += product.price;
      newState.discount += product.price;
    } else {
      newState.total += product.price;
    }
  } else {
    newState.total += product.price;
  }
  return newState;
}

function bogofOffer (newState, product) {
  if (product.qty % 2 === 0) {
    Object.assign(product, {bogof: 'BOGOF!'});
  } else {
    Object.assign(product, {bogof: ''});
  }
  return newState;
}