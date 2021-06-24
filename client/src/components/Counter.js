import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increament,decreament} from "../store/action";
//Cart
const Counter = () => {
  const count=useSelector(state=> state.counter.count)
  const dispatch=useDispatch();
  return ( 
      <>
        <div>
          Counter:{count}
          <br />
          <br />
           <button onClick={()=>dispatch(increament())}>+</button>
          <button onClick={()=>dispatch(decreament())}>-</button> 
        </div>
      </>
   );
}
 
export default Counter;
// class Counter extends Component {
//   render() {
//     return (
      
//     );
//   }
// }
// const mapStatetoProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchtoPrps = (dispatch) => {
//   return {
//     increament: () => dispatch({ type: "INCREAMENT" }),
//     decreament: () => dispatch({ type: "DECREAMENT" }),
//   };
// };
// export default connect(mapStatetoProps, mapDispatchtoPrps)(Counter);
