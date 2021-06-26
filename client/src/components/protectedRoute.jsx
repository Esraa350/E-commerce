import React from 'react'
import { Route,Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";
import { toast, ToastContainer } from "react-toastify";
export const ProtectedRoute=({component:Component,...rest})=>{
    const isAdmin=useSelector(state=> state.logged.isAdmin);
  console.log(isAdmin,"AppAdmin");
  const isLogged=useSelector(state=>state.logged.logged);
  console.log(isLogged,"AppIslogin");
     return(
         <>
         <ToastContainer/>
         <Route {...rest} render={
             (props)=>{
                 if(isLogged&&isAdmin){
                 return<Component/>
             }else if(!isAdmin){
                toast.info("Not Admin");
                return <Redirect to={
                    {
                        pathname:'/',
                        state:{
                            from:props.location
                        }
                    }
                }/>
             }
             else{
              return <Redirect to={
                  {
                      pathname:'/login',
                      state:{
                          from:props.location
                      }
                  }
              }/>
             }
            }
         }/>
         </>
     )
}