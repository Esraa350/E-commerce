import React from 'react';
import {useHistory} from "react-router-dom";

const Category = ({categories}) => {
    var history = useHistory();
    
console.log(categories.data.id,"caAdd");
    return ( 
        <>
        <button onClick={()=>history.push("/categoryForm/new")} className="btn btn-primary m-2">Add</button>
        <table className="table table-striped">
              <thead className="table-success">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                   {categories.data.map((category) => (
                       console.log(category._id),
                    <tr key={category.id}>
                      <td>{category.category}</td>
            
                      <td>
                      <i onClick={()=>history.push(`/categoryForm/${category._id}`)} 
                      style={{cursor:'pointer'}} className="fas fa-edit"></i>
                      </td>
                      <td>
                      <i 
                       style={{cursor:'pointer'}} className="fas fa-trash"></i>
                      </td>
                    </tr>
                  ))} 
              </tbody>
            </table>
        </>
     );
}
 
export default Category;