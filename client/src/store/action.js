import axios from "axios";

//action
const increament=()=>{
    return{
        type:"INCREAMENT",
        payload:2
    };
};
const decreament=()=>{
    return{
        type:"DECREAMENT",
        payload:1
    }
};
const login=(name)=>{
    return{
        type:"LOGIN",
        payload:name ? name:'',
    }
}
const logout=(name)=>{
    return{
        type:"LOGOUT",
        payload:name ? name:'',
    }
} 
const loadUser=()=>(dispatch,getState)=>{
    dispatch({type:"USER_LOADING"});
    const token=getState().auth.token;
    
}

export{increament,decreament,login,logout,loadUser};