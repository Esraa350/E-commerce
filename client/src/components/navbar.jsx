import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {logout} from "../store/action";
import "./css/Form.css";
import CartIcone from "./Cart/CartIcon";

//stateless function component
const NavBar = () => {
 const isLogged=useSelector((state)=>state.logged.logged);
 const username=useSelector((state)=>state.logged.name);
 const dispatch=useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <NavLink className="navbar-brand" to="/">
      Fashion
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
         
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/category">
              Category
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/product">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="admin">
              Admin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="cart">
              Cart
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/login">
             {isLogged?<button className="btnlogin" onClick={()=>dispatch(logout())}>Logout</button>:<button className="btnlogin" >Login</button>}
              
            </NavLink>
          </li>
        </ul>
       <CartIcone/>
        <span style={{color:"white"}}>
        <i class="fas fa-user-circle"></i>
          {username}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
