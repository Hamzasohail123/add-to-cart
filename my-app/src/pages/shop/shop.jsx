import React, { useState } from 'react';
import PRODUCTS from '../../products';
import Product from './prodcut';
import './shop.css';

const Shop = () => {
 
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Computer Zone</h1>      
      </div>
      
      <div className='products'>
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
