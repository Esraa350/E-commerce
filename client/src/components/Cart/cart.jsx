import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../store/action";
import { useHistory } from "react-router-dom";
const Cart = ({productItem}) => {
  // const productItem = useSelector((state) => state.cartItems.cart);
  const dispatch = useDispatch();
  const history=useHistory();
  const deleteFromCart=(index)=>{
    toast.warning("Delete From Cart")
    dispatch(removeFromCart(index));
    history.push('/cart');
  }
  const payment = (index) => {
    toast.success("payment success");
    dispatch(removeFromCart(index));
    history.push('/cart');
  };

  console.log(productItem, "CARTPRR");
  return (
    <>
      <ToastContainer />

      {productItem.map((product, index) => (
        <div key={product.product._id} className="col-3">
          <div className="card cardproduct rounded shadow overflow-hidden p-3 mb-5">
            <img
              src={product.product.productImage}
              className="card-img img"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.product.name}</h5>
              <h5> price:{product.product.price}$</h5>
              <a 
                onClick={() => deleteFromCart(index)}
                class="btn btn-danger col"
              >
                <i class="fas fa-trash-alt"></i>
                Delete
              </a>
              <a 
                onClick={() => payment(index)}
                class="btn btn-primary col"
              >
                <i class="fas fa-money-bill-wave"></i>
                Buy
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
