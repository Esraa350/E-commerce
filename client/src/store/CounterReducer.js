const initialState = {
    count: 0,
  };
//reducer
const Counter = (state=initialState, action) => {
    switch (action.type) {
      case "INCREAMENT":
        return {
          ...state,
          count: state.count + action.payload,
        };
      case "DECREAMENT":
        return {
          ...state,
          count: state.count - action.payload,
        };
  
      default:
        return state;
    }
  };
export default Counter;