import React, { Component,useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Joi from "joi-browser";
import axios from "axios";
import "../css/Form.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState(
    {
      username:"",
      email: "",
      password: "",
      errors: {},
    });
    const schema = {
      username:Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    };
    const getToken = () => {
      return localStorage.getItem("token");
    };
    const tokenExpired=(token)=> {
      const expiry = JSON.parse(atob(token.split(".")[1])).exp;
      return Math.floor(new Date().getTime() / 10000) >= expiry;
    }
    const 
    handleSubmit = async (e) => {
      e.preventDefault();
      const errors = this.validate();
  
      if (errors === null) {
        let obj = { ...values};
        return await axios
          .post("user/register", obj)
          .then((response) => {
            console.log(response.data);
            console.log(response.status);
            toast.dark("dddd")
          //   localStorage.setItem("token", response.data.token);
            this.props.history.replace("/home");//to forward in home page after login
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
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    };
   const  validate = () => {
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
              SignUp
              <hr></hr>
            </h1>
            <div className="form-inputs">
              <label className='form-label' htmlFor="username">username</label>
              <input
                className="form-input"
                value={values.username}
                onChange={handelChange}
                autoFocus
                name="username"
                id="username"
                type="text"
                
              />
              {values.errors.username && (
                <div className="alert alert-danger">
                  {values.errors.username}
                </div>
              )}
            </div>
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
              SignUp
            </button>
            <span className='form-input-login'>
                Already have an account? Login<Link to="/login">here</Link>
              </span> 
          </form>
        </div>
      </>
   );
}
 
export default SignUp;
