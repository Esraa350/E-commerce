import React from "react";
import "./css/productcard.css";
const ProductDetail = (props) => {
  console.log(props.products.data);
  console.log(props.match.params.id);
  console.log(
    props.products.data.filter((el) => {
      return el._id === props.match.params.id;
    }),
  );
  let product = props.products.data.filter((el) => {
    return el._id === props.match.params.id;
  })[0];
  console.log(product);
  return (
    <>

    <h3>{product.name}</h3>
    <div className="card mb-3 cardDetail shadow p-3 bg-white rounded" >
  <div className="row g-0">
    <div className="col-4">
      <img className='card-img cardDetailImg' src={product.productImage} alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body row">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
         <span class="badge badge-info">Info</span>
         <h5 className="col-2"> price: </h5>
         <h5 className="price row">
          {product.price}$
             </h5>   
        <div className="boxbtn">
        <a href="#" className="btn btn-primary btn-lg col-md-3">
          <i className="fas fa-shopping-cart "></i>
          ADD TO CART
          </a>
          <a href="#" className="btn btn-success btn-lg  col-md-3">
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
