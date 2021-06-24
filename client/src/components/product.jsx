import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Product extends Component {
//   state = {
//     name: this.props.product.name,
//     count: this.props.product.count,
//   };
  getClasses() {
    return this.props.product.count === 0
      ? "badge bg-warning m-2"
      : "badge bg-primary m-2";
  }
  //  renderNames(){
  //      if(this.props.product.names.length===0){
  //          return <h2>No Names</h2>
  //      }
  //      return(
  //          <ui>
  //              {this.state.names.map(i=><li key={i}>{i}</li>)}
  //          </ui>
  //      )
  //  }
  IncrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
 
  render() {
    // console.log(this.props)//data sended from other component
    return (
      <div className="row">
        <div className="col-2">
         <Link to={`/products/${this.props.product.id}`}>
         <span>{this.props.product.name}</span>
           </Link> 
        </div>
        <div className="col">
          <span className={this.getClasses()}>{this.props.product.count}</span>
          <button
            onClick={()=>this.props.onIncrement(this.props.product)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
          <span style={{cursor:"pointer"}} onClick={()=>this.props.onDelete(this.props.product)}>
            <i className="fas fa-trash-alt m-2"></i>
          </span>
        </div>
        {/* {this.state.names.length===0 && <h4>No Names</h4>}
             <ui>
             {this.state.names.map(i=><li key={i}>{i}</li>)}
             </ui> */}
        {/* {this.renderNames()} */}
        {/* {this.props.children}render childern */}
      </div>
    );
  }
}

export default Product;
