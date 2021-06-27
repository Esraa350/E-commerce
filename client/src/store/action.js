
import jwt from 'jwt-decode';

const addToCart=(productInfo)=>{
   return{
       type:"ADD_TO_CART",
       payload:productInfo,
   }
}
const removeFromCart=(index)=>{
    return{
         type:"REMOVE_FROM_CART",
         payload:index,
    }
}
const login=(name)=>{
    const token=localStorage.getItem('token');
    const user = jwt(token);

    return{
        type:"LOGIN",
        payload:name ? name:'',
        isAdmin:user.user.isAdmin,
    }
}
const logout=(name)=>{
    return{
        type:"LOGOUT",
        payload:name ? name:'',
    }
} 

export{login,logout,addToCart,removeFromCart};