import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductComponent from '../Product';
import Product from '../../models/Product';

import { ProductList, ProductListTitle } from './Style';

class ProductListComponent extends Component {
  render () {
    return (
      <div style={ProductList}>
        <h2 style={ProductListTitle}>Our Products</h2>
        {this.props.products.map(x =>
          <ProductComponent product={x} key={x.code} />
        )}
      </div>
    );
  }
}

ProductListComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.instanceOf(Product)
  )
};

export default ProductListComponent;