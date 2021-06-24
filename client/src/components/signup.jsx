import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import Joi from "joi-browser";
import axios from "axios";
import "./Form.css";
import { Link } from "react-router-dom";
class SignUp extends Component {
  state = {
    username:"",
    email: "",
    password: "",
    errors: {},
  };
  schema = {
    username:Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  };
  getToken = () => {
    return localStorage.getItem("token");
  };
  tokenExpired(token) {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    console.log(expiry);
    console.log(new Date().getTime() / 100);
    return Math.floor(new Date().getTime() / 10000) >= expiry;
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();

    if (errors === null) {
      let obj = { ...this.state};
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
  handelChange = (e) => {
    //clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };
  validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
    if (!res.error) {
      this.setState({ errors: {} });
      return null;
    } else {
      for (const error of res.error.details) {
        errors[error.path] = error.message;
      }
    }
    //set State
    this.setState({ errors });
  };
  render() {
    return (
      <>
        <div className="form-content-right">
          <ToastContainer />
          <form className="form" onSubmit={this.handleSubmit}>
            <h1>
              SignUp
              <hr></hr>
            </h1>
            <div className="form-inputs">
              <label className='form-label' htmlFor="username">username</label>
              <input
                className="form-input"
                value={this.state.username}
                onChange={this.handelChange}
                autoFocus
                name="username"
                id="username"
                type="text"
                
              />
              {this.state.errors.username && (
                <div className="alert alert-danger">
                  {this.state.errors.username}
                </div>
              )}
            </div>
            <div className="form-inputs">
              <label className='form-label' htmlFor="email">Email</label>
              <input
                className="form-input"
                value={this.state.email}
                onChange={this.handelChange}
                autoFocus
                name="email"
                id="email"
                type="text"
                
              />
              {this.state.errors.email && (
                <div className="alert alert-danger">
                  {this.state.errors.email}
                </div>
              )}
            </div>
            <div className="form-inputs">
              <label className='form-label' htmlFor="password">Password</label>
              <input
                className="form-input"
                value={this.state.password}
                onChange={this.handelChange}
                name="password"
                id="password"
                type="password"
                
              />
              {this.state.errors.password && (
                <div className="alert alert-danger">
                  {this.state.errors.password}
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
}

export default SignUp;
