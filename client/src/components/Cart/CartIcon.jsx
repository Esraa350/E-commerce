import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CartIcone = () => {
  const quantity = useSelector((state) => state.cartItems.count);

  return (
    <>
      <Link to="/cart">
        <span className="badge badge-primary">
          <i className="fas fa-shopping-cart "></i>
          {quantity}
        </span>
      </Link>
    </>
  );
};

export default CartIcone;
