import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom';
import axios from "axios";
const ProductForm = ({categories}) => {
  
  const [data,setData]=useState({
    id:'',
    name: '', 
    description: '',
    price:'',
    productImage:'',
    category:'',
 });
 var history = useHistory();
 const { id } = useParams();
  async function fetchData() {
    const dataProduct={...data};
       await axios.get("/product/" + id).then(
         res=> {
          dataProduct.name=res.data.name;
          dataProduct.description=res.data.description;
          dataProduct.price=res.data.price;
          dataProduct.productImage=res.data.productImage;
          dataProduct.category=res.data.category;
          dataProduct.id=res.data._id;
          setData(dataProduct);
                  }
      );
  }
 useEffect(()=>{
  if (id !== "new") {
      fetchData();
      // console.log(getdata);     
  }
})
const handleSubmit = async (e) => {
  e.preventDefault();
  //add
  if (id === "new") {
    const obj = { ...data};
    await axios.post("/product", obj);
    console.log("saved");
    
  } //Edit
  else{
      const obj = { ...data};
      //delete id
      delete obj.id;
      await axios.patch("/product/"+data.id,obj)
  }
 
  history.replace("/admin");
};

const handelChange = (e) => {
  if(e.target.name==='category'){
    categories.data.map((p) =>
    {
      if(p.category===e.target.value){
        e.target.value=p._id;
      
      }
      return 0;
    }
    );
    // console.log(newProduct._id);
  }
  const { name, value } = e.target;

setData({
...data,
[name]: value
});
};   
  return (  
    <>
         <h1>
          {id === "new"
            ? "Add Product"
            : "Edit Product"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={data.name}
              onChange={handelChange}
              name="name"
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Description</label>
            <input
              value={data.description}
              onChange={handelChange}
              name="description"
              id="description"
              type="text"
              className="form-control"
            />
          </div>
          
          
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              value={data.price}
              onChange={handelChange}
              name="price"
              id="price"
              type="number"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Product Image</label>
            <input
              value={data.productImage}
              onChange={handelChange}
              name="productImage"
              id="productImage"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Category</label>
            <input
              value={data.category.category}
              onChange={handelChange}
              name="category"
              id="category"
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {id === "new" ? "Add" : "Edit"}
          </button>
        </form>
      </>
    
  );
}
 
export default ProductForm;
