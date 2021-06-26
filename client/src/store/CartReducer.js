const initialState = {
    cart:[],
    count:0
  };
//reducer
const Cart = (state=initialState, action) => {
  console.log(action.payload,"payload");
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          cart:[
            ...state.cart,
            {
              product:action.payload,
            }

          ],
          count:state.count+1
        };
      case "REMOVE_FROM_CART":{
        const item_index=action.payload;
        const newState={...state}
        if(newState.count>0){
        newState.count-=1;
        }
        else{
          newState.count=0;
        }
        delete newState.cart[item_index];

        return newState;
      }
        
      default:
        return state;
    }
  };
export default Cart;