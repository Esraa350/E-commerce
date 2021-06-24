import React from "react";
import CardCategory from "./cardCategory";
const Category = ({categories}) => {
  return (  
    <div className="row">
          <CardCategory categories={categories}/>
      </div> 
  );
}
export default Category;
