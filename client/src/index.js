import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import"../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import"../node_modules/react-toastify/dist/ReactToastify.css";
import Reducers from "./store/reducers";
import {createStore} from "redux";
import {Provider} from "react-redux"
import axios  from 'axios';
axios.defaults.baseURL='http://localhost:4000/';
axios.defaults.headers.common['Authorization']=localStorage.getItem('token');
let store=createStore(Reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <BrowserRouter>
 <Provider store={store}>  
 
  <App/>
 </Provider>
 
  
  </BrowserRouter>,
  document.getElementById('root')
);