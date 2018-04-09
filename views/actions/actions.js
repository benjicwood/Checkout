import * as types from './types';
import aProducts from '../config/products';

export const setProducts = () => {
  return {
    type: types.SET_PRODUCTS,
    products: aProducts
  };
};

export const setDiscount = (itemPrice) => {
  return {
    type: types.SET_DISCOUNT,
    discount: itemPrice
  };
};

export const selectItem = (product) => {
  return {
    type: types.SET_ITEM_IN_BASKET,
    selectedProduct: product
  };
};

export const setTotal = (itemPrice) => {
  return {
    type: types.SET_TOTAL,
    total: itemPrice
  };
};

export const bogofOffer = (product) => {
  return {
    type: types.BOGOF_OFFER,
    selectedProduct: product
  };
};