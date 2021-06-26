import React from 'react';

import Card from '../Product/cardProduct';
const CategoryDetail = (props) => {
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
