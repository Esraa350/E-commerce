import React from 'react';
import Cart from './cart';
import { useSelector, useDispatch } from "react-redux";

const ShoppingCart = () => {
  const productItem = useSelector((state) => state.cartItems.cart);
  return ( 
    <>
    <h2>Cart</h2>
    <div className="row">
        <Cart productItem={productItem} />

    </div>
       
      </>
   );
}
 
export default ShoppingCart;

