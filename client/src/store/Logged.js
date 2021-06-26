const initialState = {
    token:localStorage.getItem('token'),
    logged: false,
    isAdmin:false,
    name:''
  };
//reducer
const Logging = (state=initialState, action) => {
    switch (action.type) {
      case "LOGIN":

        return {
          ...state,
          logged: true,
          name:action.payload,
          isAdmin:action.isAdmin,
        };
      case "LOGOUT":
        localStorage.removeItem('token');
        return {
          ...state,
          logged: false,
          isAdmin:false,
          name:null,
        };
  
      default:
        return state;
    }
  };
export default Logging;