/* eslint-env mocha */
import * as types from './types';

describe('actions.setProducts', () => {
  it('takes a SET_PRODUCTS type', () => {
    expect(types.SET_PRODUCTS).toBe('SET_PRODUCTS');
  });
});
describe('actions.setDiscount', () => {
  it('takes a SET_DISCOUNT type', () => {
    expect(types.SET_DISCOUNT).toBe('SET_DISCOUNT');
  });
});
describe('actions.selectItem', () => {
  it('takes a SET_ITEM_IN_BASKET type', () => {
    expect(types.SET_ITEM_IN_BASKET).toBe('SET_ITEM_IN_BASKET');
  });
});
describe('actions.setTotal', () => {
  it('takes a SET_TOTAL type', () => {
    expect(types.SET_TOTAL).toBe('SET_TOTAL');
  });
});
describe('actions.bogofOffer', () => {
  it('takes a BOGOF_OFFER type', () => {
    expect(types.BOGOF_OFFER).toBe('BOGOF_OFFER');
  });
});