import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../../models/Product';

import { selectItem, setTotal, setDiscount, bogofOffer } from '../../actions/actions';
import { ProductStyle, ProductName, ProductPrice } from './Style';

class ProductComponent extends Component {
  handleClick (product) {
    this.props.dispatch(selectItem(product));
    var itemPrice = this.props.product.price;
    this.props.dispatch(setTotal(itemPrice));
    if (this.props.product.code === 'G95') {
      this.props.dispatch(bogofOffer(product));
    }
    if (this.props.product.code === 'G95' && this.props.product.qty % 2 !== 0) {
      this.props.dispatch(setDiscount(itemPrice));
    }
  }
  render () {
    return (
      <div style={ProductStyle} onClick={() => this.handleClick(this.props.product)}>
        <div style={ProductName}>
          {this.props.product.name}
        </div>
        <div style={ProductPrice}>
          £{this.props.product.getFormattedPrice()}
        </div>
      </div>
    );
  }
}

ProductComponent.propTypes = {
  product: PropTypes.instanceOf(Product)
};

export default connect()(ProductComponent);