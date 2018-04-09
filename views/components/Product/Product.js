import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../../models/Product';

import { selectItem, setTotal, setDiscount, bogofOffer } from '../../actions/actions';

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
      <div onClick={() => this.handleClick(this.props.product)}>
        <div>
          {this.props.product.name}
        </div>
        <div>
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