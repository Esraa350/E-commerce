import React from 'react';

import Card from './cardProduct';
const CategoryDetail = (props) => {
    console.log(props);
    // console.log(props.products.data.filter(c => c.category._id == props.match.params.id))
    const products=props.products.data.filter(c => c.category._id === props.match.params.id);
    return (  
      <>
       <div className="row">
     <Card products={products}/>
      </div>
      </>
    );
}
 
export default CategoryDetail;
