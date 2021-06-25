import "./App.css";
import NavBar from "./components/navbar";
import ShoppingCart from "./components/shoppingCart";
import React, { useState,useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
// import Reducers from "./store/reducers";
import {createStore} from "redux";
import Home from "./components/home";
import ProductDetail from "./components/productDetail";
import PageNotFound from "./components/pagenot";
import Menu from "./components/menu";
import LoginForm from "./components/mainLogin";
import Admin from "./components/admin";
import ProductForm from "./components/productForm";
import signupForm from "./components/signupform";
import Counter from "./components/Counter";
import Category from "./components/category";
import CategoryDetail from "./components/categoryDetail";
import { loadUser } from './store/action';
import {useSelector,useDispatch} from "react-redux";
import Categoryform from "./components/CategoryForm";
const App = () => {
  const [products,setProducts]=useState([]);
  const [categories,setCategories]=useState([]);
  const [userLogin,setUserLogin]=useState([]);
  // let store=createStore(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  const dispatch=useDispatch();
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
  
  const tokenExpired=(token)=> {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    console.log(expiry);
    console.log(new Date().getTime() / 100);
    return Math.floor(new Date().getTime() / 10000) >= expiry;
  }

  useEffect(()=>{
    
    fetchData();
    console.log(categories);
    // dispatch(loadUser());
    console.log(tokenExpired(localStorage.getItem('token')))
    
    axios.get('user/logged').then(
       res=>{
         setUserLogin(res.data);
       },
       err=>{
         console.log(err);
       }
     )
  },[])
 
   

  return ( 
    <>

     <ToastContainer />
         <NavBar
          // productsCount={products.data.filter((p) => p.isInCart).length}
        /> 
       
          <Counter />
        

        <main className="container">
          <Switch>
            <Route path="/pageNotFound" component={PageNotFound} />
            <Route
              path="/products/:id"
              render={(props) => (
                <ProductDetail products={products} {...props}/>
              )}
            />
            

            <Route path="/productsform/:id" component={ProductForm} />
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter((p) => p.isInCart)}
                  onIncrement={this.IncrementHandler}
                  onreset={this.resetHandler}
                  onDelete={this.deleteHandler}
                  {...props}
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
            <Route
              path="/admin">
                  <Admin 
              categories={categories}
              products={products}
              ></Admin>
              </Route>
           <Route path="/category">
             <Category categories={categories} />
           </Route>
           <Route path="/categoryForm/:id" component={Categoryform} />
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
            <Route path="/signUp" component={signupForm} />
            <Route path="/home" render={(props) => <Home {...props}></Home> }/>
            <Redirect from="/" to="home" />
            <Redirect to="/pageNotFound" />
          </Switch>
        </main> 
    </>
   );
}
 

// class App extends Component {
//   state = {
//     products: [],
//     categories:[],
//   };

//   async componentDidMount() {
//     let product="http://localhost:4000/product";
//     let category="http://localhost:4000/category";
//     const productRequest=await axios.get(product);
//     const categoryRequest=await axios.get(category);
//     var productResponse;
//     var categoryResponse;
//     axios.all([productRequest,categoryRequest]).then(axios.spread((...responses) => {
//        productResponse = responses[0]
//        categoryResponse = responses[1]
//        this.setState({ products:responses[0] ,categories:responses[1] });

//       // use/access the results 
//     })).catch(errors => {
      
//     })
//     // const { data } = await axios.get("http://localhost:4000/product");
//     // const {categoryData}=await axios.get("http://localhost:4000/category")
//     //Pending
//     //resolved(back with data)
//     //rejected
//     //set State
    
//     console.log(productResponse,'one');
//     console.log('two',categoryResponse);
    
//   }
//   IncrementHandler = (product) => {
//     //clone
//     let products = [...this.state.products];
//     const index = products.indexOf(product);
//     products[index] = { ...products[index] }; //deepclone
//     //Edit
//     products[index].count++;
//     //set state
//     this.setState({ products });
//   };
//   deleteHandler = async (product) => {
//     const oldProducts = [...this.state.products];

//     //State
//     //Clone
//     //Edit
//     const products = this.state.products.filter((p) => p.id !== product.id);
//     //Set state
//     this.setState({ products });

//     try {
//       //Call B
//       await axios.delete("http://localhost:3001/products/444" + products.id);
//       //Edit
//     } catch (e) {
//       toast.error("can't delete");
//       this.setState({ products: oldProducts });
//     }
//   };
//   resetHandler = () => {
//     //clone
//     let products = [...this.state.products];
//     //Edit
//     products = products.map((p) => {
//       p.count = 0;
//       return p;
//     });
//     //set state
//     this.setState({ products });
//   };
//   handlerInCartChange = (product) => {
//     //clone
//     const products = [...this.state.products];
//     const index = products.indexOf(product);
//     products[index] = { ...products[index] };
//     //Edit
//     products[index].isInCart = !products[index].isInCart;
//     //set State
//     this.setState({ products });
//   };

//   render() {
//     return (
//       <>
//         <ToastContainer />
//         <NavBar
//           productsCount={this.state.products.filter((p) => p.isInCart).length}
//         />
//         <Provider store={store}>
//           <Counter />
//         </Provider>

//         <main className="container">
//           <Switch>
//             <Route path="/pageNotFound" component={PageNotFound} />
//             <Route
//               path="/products/:id"
//               render={(props) => (
//                 <ProductDetail products={this.state.products} {...props} />
//               )}
//             />
            

//             <Route path="/productsform/:id" component={ProductForm} />
//             <Route
//               path="/cart"
//               render={(props) => (
//                 <ShoppingCart
//                   products={this.state.products.filter((p) => p.isInCart)}
//                   onIncrement={this.IncrementHandler}
//                   onreset={this.resetHandler}
//                   onDelete={this.deleteHandler}
//                   {...props}
//                 ></ShoppingCart>
//               )}
//             />
//             <Route
//               path="/menu"
//               render={(props) => (
//                 <Menu
//                   products={this.state.products}
//                   onClick={this.handlerInCartChange}
//                   {...props}
//                 ></Menu>
//               )}
//             />
//             <Route
//               path="/admin"
//               render={(props) => (
//                 <Admin
//                   products={this.state.products}
//                   OnDelete={this.deleteHandler}
//                   {...props}
//                 ></Admin>
//               )}
//             />
//            <Route path="/category">
//              <Category/>
//            </Route>
//            <Route path="/categories/:id">
//              <CategoryDetail/>
//            </Route>
//             <Route
//               path="/login"
//               render={(props) => <LoginForm {...props}></LoginForm>}
//             />
//             <Route path="/login" component={LoginForm} />
//             <Route path="/signUp" component={signupForm} />
//             <Route path="/home" component={Home} />
//             <Redirect from="/" to="home" />
//             <Redirect to="/pageNotFound" />
//           </Switch>
//         </main>
//       </>
//     );
//   }
// }
// function AppWithStore() {
//   return <Provider store={store}>
//     <App/>
//   </Provider>
// }
export default App;
