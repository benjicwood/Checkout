/* eslint-env mocha */
import basket from './basket';
import products from './products';

describe('basket reducer', () => {
  it('should return the initialState', () => {
    expect(basket(undefined, {})).toEqual([]);
  });
});

describe('products reducer', () => {
  it('it should return the initialState', () => {
    expect(products(undefined, {})).toEqual({});
  });
});