const initialState = {
    logged: false,
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

        };
      case "LOGOUT":
        return {
          ...state,
          logged: false,
          name:action.payload,
        };
  
      default:
        return state;
    }
  };
export default Logging;