import React,{Component} from "react";
// import Cart from "./cart";
import qs from 'query-string';
import Card from './cardProduct';
// import Product from './product';

const Menu = ({products}) => {
  console.log(products)
  return ( 
    
    <>
         <h1>Menu</h1>
      
      <div className="row">
      <Card products={products.data} />
     </div>
      
      </>
   );
}
 


 
export default Menu;
