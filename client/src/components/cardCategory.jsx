import React from "react";
import { Link } from "react-router-dom";
import"./Form.css";
const CardCategory = ({categories}) => {

  console.log(categories,"ccaa");
  return (
    <>
   <div className="row">
    {categories.data.map((category) => (
      
        
       <div className="col-3 ">
         <div className="card rounded shadow overflow-hidden  ">
           <img src={category.categoryImg}className="card-img  cards"alt="..."/>
           <div className="card-body">

             <Link className="btn btn-primary col-12 " to={`/categories/${category._id}`}>
              <span>{category.category}</span>
             </Link>
           </div>
           
         </div>
       </div>
       
    ))}
    
    </div> 
    </>
  );
};

export default CardCategory;
