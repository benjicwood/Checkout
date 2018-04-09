/* eslint-env mocha */
import { formattedPrice, discountedPrice } from './price';

describe('formattedPrice', () => {
  test('formats the price to currency format', () => {
    expect(formattedPrice(1)).toBe('0.01');
    expect(formattedPrice(10)).toBe('0.10');
    expect(formattedPrice(100)).toBe('1.00');
  });
});
describe('discountedPrice', () => {
  test('discounts the price above £10 formats', () => {
    expect(discountedPrice(100)).toBe('1.00');
    expect(discountedPrice(1000)).toBe('10.00');
    expect(discountedPrice(1001)).toBe('8.01');
  });
});