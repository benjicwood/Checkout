import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../Order';
import ProductList from '../ProductList';
import './App.css';

import { setProducts } from '../../actions/actions';

class AppComponent extends Component {
  componentWillMount () {
    this.props.setProducts();
  }
  render () {
    if (!this.props.products) return <div>Loading...</div>;
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Welcome to the Checkout</h1>
        </div>
        <div className='App-body'>
          <ProductList products={this.props.products} />
          <Order basket={this.props.basket} total={this.props.total} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    basket: state.basket
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: () => dispatch(setProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);