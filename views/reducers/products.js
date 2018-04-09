import * as types from '../actions/types';

export default function products (initialState = {}, action) {
  const newState = {...initialState};

  switch (action.type) {
    case types.SET_PRODUCTS: return setProducts(newState, action);
    default: return newState;
  }
}

function setProducts (newState, action) {
  delete action.type;
  return Object.assign(newState, action);
}