import React, { useState,useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import {useSelector,useDispatch} from "react-redux"
import {login,logout} from "../store/action";
import Joi from "joi-browser";
import axios from "axios";
import "./Form.css";
import { Link } from "react-router-dom";

const Login = (props) => {

  const dispatch=useDispatch();
  const [values, setValues] = useState({
    email: '',
    password: '',
    errors: {},

  });
  // console.log(values,"vvavva");
  const schema = {
         email: Joi.string().required(),
         password: Joi.string().required(),
       };
  const getToken = () => {
         return localStorage.getItem("token");
     };
  const tokenExpired=(token)=> {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    console.log(expiry);
    console.log(new Date().getTime() / 100);
    return (Math.floor(new Date().getTime() / 10000) <= expiry);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    
    if (errors === null) {
      let obj = { ...values, username: "Esraa" };
      console.log(obj,"objessea")
      return await axios
        .post("user/login", obj)
        .then((response) => {
          console.log(response.data);
          console.log(response.status);
          localStorage.setItem("token", response.data.token);
          console.log(tokenExpired(getToken()));
         dispatch(login(response.data.username));//to set username
          props.history.replace("/home");//to forward in home page after login
        })
        .catch(function (error) {
          if (error.response) {
            // let message=error.response.errors;
            toast.error(`${error.response.data.errors}`);
            // console.log();
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    } else {
      return;
    }
  };
   const handelChange = (e) => {
    // //clone
    // let state = { ...this.state };
    // //Edit
    // state[e.currentTarget.name] = e.currentTarget.value;
    // //Set state
    // this.setState(state);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
 const validate = () => {
    const errors = {};
    const state = { ...values };
    delete state.errors;
    const res = Joi.validate(state, schema, { abortEarly: false });
    if (!res.error) {
      setValues({ errors: {} });
      return null;
    } else {
      for (const error of res.error.details) {
        errors[error.path] = error.message;
      }
    }
    //set State
    setValues({ errors });
  };


  return (  
    <>
        <div className="form-content-right">
          <ToastContainer />
          <form className="form" onSubmit={handleSubmit}>
            <h1>
              Login
              <hr></hr>
            </h1>
            <div className="form-inputs">
              <label className='form-label' htmlFor="email">Email</label>
              <input
                className="form-input"
                value={values.email}
                onChange={handelChange}
                autoFocus
                name="email"
                id="email"
                type="text"
                
              />
              {values.errors.email && (
                <div className="alert alert-danger">
                  {values.errors.email}
                </div>
              )}
            </div>
            <div className="form-inputs">
              <label className='form-label' htmlFor="password">Password</label>
              <input
                className="form-input"
                value={values.password}
                onChange={handelChange}
                name="password"
                id="password"
                type="password"
                
              />
              {values.errors.password && (
                <div className="alert alert-danger">
                  {values.errors.password}
                </div>
              )}
            </div>
            <button type="submit" className="form-input-btn">
              Login
            </button>
            <span className='form-input-login'>
                Already have an account? Sign Up<Link to='/signUp'>here</Link>
              </span> 
          </form>
        </div>
      </>
  );
}
 
export default Login;
// class Login extends Component {
//   state = {
//     email: "",
//     password: "",
//     errors: {},
//   };
//   islooged=useSelector((state)=> state.logged.logged);
//   schema = {
//     email: Joi.string().required(),
//     password: Joi.string().required(),
//   };
//   getToken = () => {
//     return localStorage.getItem("token");
//   };
  // tokenExpired(token) {
  //   const expiry = JSON.parse(atob(token.split(".")[1])).exp;
  //   console.log(expiry);
  //   console.log(new Date().getTime() / 100);
  //   return (Math.floor(new Date().getTime() / 10000) <= expiry);
  // }
  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const errors = this.validate();

  //   if (errors === null) {
  //     let obj = { ...this.state, username: "Esraa" };
  //     return await axios
  //       .post("user/login", obj)
  //       .then((response) => {
  //         console.log(response.data);
  //         console.log(response.status);
  //         localStorage.setItem("token", response.data.token);
  //         console.log(this.tokenExpired(this.getToken()));
  //         this.props.history.replace("/home");//to forward in home page after login
  //       })
  //       .catch(function (error) {
  //         if (error.response) {
  //           // let message=error.response.errors;
  //           toast.error(`${error.response.data.errors}`);
  //           // console.log();
  //           console.log(error.response.status);
  //           console.log(error.response.headers);
  //         }
  //       });
  //   } else {
  //     return;
  //   }
  // };
  // handelChange = (e) => {
  //   //clone
  //   let state = { ...this.state };
  //   //Edit
  //   state[e.currentTarget.name] = e.currentTarget.value;
  //   //Set state
  //   this.setState(state);
  // };
  // validate = () => {
  //   const errors = {};
  //   const state = { ...this.state };
  //   delete state.errors;
  //   const res = Joi.validate(state, this.schema, { abortEarly: false });
  //   if (!res.error) {
  //     this.setState({ errors: {} });
  //     return null;
  //   } else {
  //     for (const error of res.error.details) {
  //       errors[error.path] = error.message;
  //     }
  //   }
  //   //set State
  //   this.setState({ errors });
  // };
//   render() {
//     return (
//       <>
//         <div className="form-content-right">
//           <ToastContainer />
//           <form className="form" onSubmit={this.handleSubmit}>
//             <h1>
//               Login
//               <hr></hr>
//             </h1>
//             <div className="form-inputs">
//               <label className='form-label' htmlFor="email">Email</label>
//               <input
//                 className="form-input"
//                 value={this.state.email}
//                 onChange={this.handelChange}
//                 autoFocus
//                 name="email"
//                 id="email"
//                 type="text"
                
//               />
//               {this.state.errors.email && (
//                 <div className="alert alert-danger">
//                   {this.state.errors.email}
//                 </div>
//               )}
//             </div>
//             <div className="form-inputs">
//               <label className='form-label' htmlFor="password">Password</label>
//               <input
//                 className="form-input"
//                 value={this.state.password}
//                 onChange={this.handelChange}
//                 name="password"
//                 id="password"
//                 type="password"
                
//               />
//               {this.state.errors.password && (
//                 <div className="alert alert-danger">
//                   {this.state.errors.password}
//                 </div>
//               )}
//             </div>
//             <button type="submit" className="form-input-btn">
//               Login
//             </button>
//             <span className='form-input-login'>
//                 Already have an account? Sign Up<Link to='/signUp'>here</Link>
//               </span> 
//           </form>
//         </div>
//       </>
//     );
//   }
// }

// export default Login;
