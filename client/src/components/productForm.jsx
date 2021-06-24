import React, { Component } from "react";
import axios from "axios";
class ProductForm extends Component {
  state = {id:"", name: "", price: "" };
  async componentDidMount() {
    const id = this.props.match.params.id;
    if (id !== "new") {
      const { data } = await axios.get("http://localhost:3001/products/" + id);
      //clone
      const state = { ...this.state };
      //Edit
      state.name = data.name;
      state.price = data.price;
      state.id=data.id;
      //set state
      this.setState(state);
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    //add
    const id = this.props.match.params.id;
    if (id === "new") {
      const obj = { ...this.state, count: 0, isInCart: false };
      await axios.post("http://localhost:3001/products", obj);
      console.log("saved");
      
    } //Edit
    else{
        const obj = { ...this.state, count: 0, isInCart: false };
        //delete id
        delete obj.id;
        await axios.put("http://localhost:3001/products/"+this.state.id,obj)
    }
   
    this.props.history.replace("/admin");
  };
  handelChange = (e) => {
    //clone
    let state = { ...this.state };
    //Edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //Set state
    this.setState(state);
  };
  // clickHandler=()=>{
  //     //backend ==>save to data
  //     this.props.history.push('/cart');
  //   }
  render() {
    return (
      <>
        <h1>
          {this.props.match.params.id === "new"
            ? "Add Product"
            : "Edit Product"}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={this.state.name}
              onChange={this.handelChange}
              name="name"
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              value={this.state.price}
              onChange={this.handelChange}
              name="price"
              id="price"
              type="number"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {this.props.match.params.id === "new" ? "Add" : "Edit"}
          </button>
        </form>
      </>
    );
  }
}

export default ProductForm;
