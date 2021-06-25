import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom';
import axios from "axios";
const Categoryform = () => {
    const [data,setData]=useState({
        id:'',
        category: '', 
        categoryImg: ''
     })
     var history = useHistory();
    const { id } = useParams();
    
    useEffect(async()=>{
        if (id !== "new") {
            const dataCategory={...data};
             await axios.get("/category/" + id).then(
               res=> {
                dataCategory.category=res.data.category;
                dataCategory.categoryImg=res.data.categoryImg;
                dataCategory.id=res.data._id;
                setData(dataCategory);
                        }
            );
            // console.log(getdata);

            
        }
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        //add
        if (id === "new") {
          const obj = { ...data};
          console.log(obj,'obj');
          await axios.post("/category", obj);
          console.log("saved");
          
        } //Edit
        else{
            const obj = { ...data};
            console.log(obj);
            //delete id
            delete obj.id;
            await axios.patch("/category/"+data.id,obj)
        }
       
        history.replace("/admin");
      };

    const handelChange = (e) => {
        //clone
        // let dataCategory = {...data};
        // //Edit
        // dataCategory[e.currentTarget.name] = e.currentTarget.value;
        // //Set state
        // setData({dataCategory});
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
            ? "Add Category"
            : "Edit Category"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Category Name</label>
            <input
              value={data.category}
              onChange={handelChange}
              name="category"
              id="category"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">category Image</label>
            <input
              value={data.categoryImg}
              onChange={handelChange}
              name="categoryImg"
              id="categoryImg"
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
 
export default Categoryform;