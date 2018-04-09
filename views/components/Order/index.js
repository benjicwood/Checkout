import React, { Component } from 'react';
import { formattedPrice, discountedPrice } from '../../helpers/price';

class OrderComponent extends Component {
  render () {
    if (!this.props.basket.basket) return <div className='OrderList'><h2 className='Order-title'>Your Order</h2></div>;
    return (
      <div className='OrderList'>
        <h2 className='Order-title'>Your Order</h2>
        {this.props.basket.basket.map((product, i) => {
          // div for if asparagus is BOGOF
          if (product.code === 'G95') {
            return <div className='Order' key={i}>
              <div className='Order-name'>
                {product.name} x{product.qty} {product.bogof}
              </div>
              <div className='Order-price'>
                £{formattedPrice(product.price * (product.qty))}
              </div>
            </div>;
          }
          // div for normal price items 7.47 4.15
          return <div className='Order' key={i}>
            <div className='Order-name'>
              {product.name} x{product.qty}
            </div>
            <div className='Order-price'>
              £{formattedPrice(product.price * product.qty)}
            </div>
          </div>;
        })}
        <h4 className='price'>
          Normal Price: £{formattedPrice(this.props.basket.total)} Discount Price: £{ discountedPrice(this.props.basket.total - this.props.basket.discount)}
        </h4>
      </div>
    );
  }
}

OrderComponent.propTypes = {

};

export default OrderComponent;