import React,{useState,useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import {SidebarData} from'./SidebarAdmin';
import './Navbar.css';
import Product from './pagesAdmin/productsAdmin';
import Category from './pagesAdmin/CategoryAdmin';
const Admin = ({categories,products}) => {
  console.log(categories,"cc");

  return ( 
    <>
    <div className='row'>
      <div className='col-3'>
      <nav className='nav-menu'>
      <ul className='nav-menu-items'>
        {SidebarData.map((item,index)=>{
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path} >
                   {item.icone}
                   
                   <span>{item.title}</span>
                </Link>
              </li>
            )
        })}
      </ul>

    </nav>
   </div>
   <div className='col'>
     <Switch>
     <Route path='/admin/products' >
       <Product products={products}
       ></Product>
     </Route>
      <Route path='/admin/category'>
        <Category categories={categories}>
        </Category>
      </Route>
     </Switch>
     

   </div>

   
    </div>
    </>
   );
}
 
export default Admin;
// class Admin extends Component {
//     state = {  }
//     render() { 
//         const {products,OnDelete}=this.props;
//         return ( 
//             <>
//             <h1>Admin</h1>
            
//             <button onClick={()=>this.props.history.push("/productsform/new")} className="btn btn-primary m-2">Add</button>
                 
            
//             <table className="table table-striped">
//               <thead className="table-success">
//                 <tr>
//                   <th scope="col">Name</th>
//                   <th scope="col">Price</th>
//                   <th scope="col"></th>
//                   <th scope="col"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                   {products.map((product) => (
//                     <tr key={product.id}>
//                       <td>{product.name}</td>
//                       <td>{product.price}</td>
//                       <td>
//                       <i onClick={()=>this.props.history.push(`/productsform/${product.id}`)} 
//                       style={{cursor:'pointer'}} className="fas fa-edit"></i>
//                       </td>
//                       <td>
//                       <i onClick={()=>OnDelete(product)}
//                        style={{cursor:'pointer'}} className="fas fa-trash"></i>
//                       </td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </>
//          );
//     }
// }
 
// export default Admin;
