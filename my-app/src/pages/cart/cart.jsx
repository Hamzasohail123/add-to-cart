import React, {useContext} from 'react'
import PRODUCTS from '../../products';
import { shopContext } from '../../context/shop-context';
import CartItem from './cartItem';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate();

  const { cartItems,getTotalCartAmount } = useContext(shopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className='cart'>
      <div>
        <h1>your cart items</h1>
        <div className="ccartItems">
          {PRODUCTS.map((prodcut)=>{
            if(cartItems[prodcut.id] !== 0){
              return <CartItem data={prodcut}/>
            }
          })}
        </div>

        {totalAmount > 0 ?
        <div className="checkout">
          <p>subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>continue shopping</button>
          <button>check out</button>
        </div> : <h1>your cart is empty</h1>
        }
      </div>
    </div>
  )
}

export default Cart