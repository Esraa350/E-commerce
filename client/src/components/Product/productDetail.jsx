import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/action";
import "../css/productcard.css";
const ProductDetail = (props) => {
  const isLogged = useSelector((state) => state.logged.logged);
  console.log(isLogged, "AppIslogin");
  const dispatch = useDispatch();
  var history = useHistory();
  const Logging = (product) => {
    if (isLogged) {
      dispatch(addToCart(product));
      history.push('/product');
    } else {
      history.push("/login");
    }
  };
  let product = props.products.data.filter((el) => {
    return el._id === props.match.params.id;
  })[0];
  return (
    <>
      <h3>{product.name}</h3>
      <div className="card mb-3 cardDetail shadow p-3 bg-white rounded">
        <div className="row g-0">
          <div className="col-4">
            <img
              className="card-img cardDetailImg"
              src={product.productImage}
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body row">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <span class="badge badge-info">Info</span>
              <h5 className="col-2"> price: </h5>
              <h5 className="price row">{product.price}$</h5>
              <div className="boxbtn">
                <a
                  onClick={() => Logging(product)}
                  className="btn btn-primary btn-lg col-md-3"
                >
                  <i className="fas fa-shopping-cart "></i>
                  ADD TO CART
                </a>
                <a  className="btn btn-success btn-lg  col-md-3">
                  BUY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
