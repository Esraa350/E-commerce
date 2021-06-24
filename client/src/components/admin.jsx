import React, { Component } from 'react';

class Admin extends Component {
    state = {  }
    render() { 
        const {products,OnDelete}=this.props;
        return ( 
            <>
            <h1>Admin</h1>
            
            <button onClick={()=>this.props.history.push("/productsform/new")} className="btn btn-primary m-2">Add</button>
                 
            
            <table className="table table-striped">
              <thead className="table-success">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                      <i onClick={()=>this.props.history.push(`/productsform/${product.id}`)} 
                      style={{cursor:'pointer'}} className="fas fa-edit"></i>
                      </td>
                      <td>
                      <i onClick={()=>OnDelete(product)}
                       style={{cursor:'pointer'}} className="fas fa-trash"></i>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
         );
    }
}
 
export default Admin;
