import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {

  render() {
    const {products,onreset,onDelete,onIncrement}=this.props;
    return (
      <>
        {/* fragment */}
        <h1>Cart</h1>
        <button
          onClick={onreset}
          className="btn btn-secondary btn-sm m-2"
        >
          Reset
        </button>
        {products.map((product) => (
          <Product
            key={product.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            product={product}
          />
        ))}
      </>
    );
  }
}

export default ShoppingCart;
