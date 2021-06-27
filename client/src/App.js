import "./App.css";
import NavBar from "./components/navbar";
import ShoppingCart from "./components/Cart/shoppingCart";
import React, { useState,useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Home from "./components/home";
import ProductDetail from "./components/Product/productDetail";
import PageNotFound from "./components/pagenot";
import Menu from "./components/Product/menu";
import LoginForm from "./components/Login/mainLogin";
import Admin from "./components/pagesAdmin/admin";
import ProductForm from "./components/pagesAdmin/productForm";
import signupForm from "./components/SignUp/signupform";
import Category from "./components/Category/category";
import CategoryDetail from "./components/Category/categoryDetail";
import Categoryform from "./components/pagesAdmin/CategoryForm";
import { ProtectedRoute } from './components/protectedRoute';
const App = () => {
  const [products,setProducts]=useState([]);
  const [categories,setCategories]=useState([]);
  const fetchData=async()=>{
    const productAPI="/product";
    const categoryAPI="/category";
    const getProduct=await axios.get(productAPI)
    const getCategory=await axios.get(categoryAPI)
    axios.all([getProduct,getCategory]).then(
      axios.spread((...alldata)=>{
        const allProduct=alldata[0]
        const allCategory=alldata[1]
        setProducts(allProduct)
        setCategories(allCategory)
        
      })
    )
  }
  useEffect(()=>{
    
    fetchData();
  },[])
 
   

  return ( 
    <>

     <ToastContainer />
         <NavBar
          // productsCount={products.data.filter((p) => p.isInCart).length}
        /> 
       
          {/* <Counter /> */}
        

        <main className="container">
          <Switch>
            
            <Route
              path="/products/:id"
              render={(props) => (
                <ProductDetail products={products} {...props}/>
              )}
            />
            

              <Route 
              path="/productsForm/:id"
              render={() => (
                <ProductForm
                  categories={categories}
                ></ProductForm>
              )}
            />
            <Route 
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={products}
                  
                ></ShoppingCart>
              )}
            />
            <Route 
              path="/product"
              render={() => (
                <Menu
                  products={products}
                  // onClick={this.handlerInCartChange}
                ></Menu>
              )}
            />
          <ProtectedRoute path="/admin" component={Admin} />
           <Route   path="/category">
             <Category categories={categories} />
           </Route>
           <Route  path="/categoryForm/:id" component={Categoryform} />
           <Route 
              path="/categories/:id"
              render={(props) => (
                <CategoryDetail categories={categories} products={products} {...props}/>
              )}
            />
            
            <Route 
              path="/login"
              render={(props) => <LoginForm {...props}></LoginForm>}
            />
            {/* <Route path="/login" component={LoginForm} /> */}
            <Route  path="/signUp" component={signupForm} />
            <Route  path="/home" render={(props) => <Home {...props}></Home> }/>
            <Redirect from="/" to="home" />
            <Route  path="*"component={PageNotFound} />
            {/* <Route  path="*" component={PageNotFound} /> */}
          </Switch>

        </main> 
    </>
   );
}
export default App;
