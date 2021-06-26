import React from "react";
import { Link } from "react-router-dom";
import "../css/card.css";
const Card = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product._id} className="col-3">
          <div className="card cardproduct rounded shadow overflow-hidden p-3 mb-5">
            <img
              src={product.productImage}
              className="card-img img"
              alt="..."
            />
            <div className="card-body">
              <Link
                className="btn btn-primary col-12 "
                to={`/products/${product._id}`}
              >
                <span>{product.name}</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
