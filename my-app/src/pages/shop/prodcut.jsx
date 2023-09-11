import React, { useContext } from 'react';
import { shopContext } from '../../context/shop-context';

const Product = (props) => {

    const {id,productName,price,productImage} = props.data;
    const {addToCart, cartItems} = useContext(shopContext);

    const cartItemsAmount = cartItems[id];

  return (
    <div className="product">
    <img src={productImage} />
    <div className="description">
      <p>
        <b>{productName}</b>
      </p>
      <p> ${price}</p>
    </div>
    <button className='addToCartBttn' onClick={() => addToCart(id)}>
      Add To Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
      </button>
  </div>
  )
}

export default Product;