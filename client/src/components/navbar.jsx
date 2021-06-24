import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import {login,logout} from "../store/action";
import "./Form.css";

//stateless function component
const NavBar = (props) => {
 const isLogged=useSelector((state)=>state.logged.logged);
 const username=useSelector((state)=>state.logged.name);
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
            <NavLink className="nav-link" to="form">
              Clothing
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
             {isLogged?"Logout":"Login"}
              
            </NavLink>
          </li>
        </ul>
        <span className="badge badge-primary">
          <i className="fas fa-shopping-cart "></i>
          {props.productsCount}
        </span>
        <span>
          {username}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
