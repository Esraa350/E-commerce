import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { SidebarData } from "../SidebarAdmin";
import "../Navbar.css";
import Product from "./productsAdmin";
import Category from "./CategoryAdmin";
const Admin = () => {
  
  return (
    <>

      <div className="row">
        <div className="col-3">
          <nav className="nav-menu">
            <ul className="nav-menu-items">
              {/* sidebar for Admin page */}
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icone}

                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="col">
          <Switch>
            <Route path="/admin/products">
              <Product></Product>
            </Route>
            <Route path="/admin/category">
              <Category></Category>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;
