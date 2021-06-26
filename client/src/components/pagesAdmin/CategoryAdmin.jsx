import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const Category = () => {
  var history = useHistory();
  const [data, setData] = useState([]);
  //component Didmount
  async function fetchData() {
    const categoryAPI = "/category";
    await axios.get(categoryAPI).then((res) => {
      setData(res.data);
    });
   }
  useEffect(() => {
    fetchData();
      
    
  }, []);
  const deleteHandler = async (category) => {
    const oldgategory = { ...data };
    const newCategory = data.filter((p) => p.id !== category.id);
    setData(newCategory);
    try {
      await axios.delete("/category/" + category._id);
    } catch (e) {
      toast.error("can't delete");
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        onClick={() => history.push("/categoryForm/new")}
        className="btn btn-primary m-2"
      >
        Add
      </button>
      <table className="table table-striped">
        <thead className="table-success">
          <tr>
            <th scope="col">Name</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (category) => (
              (
                <tr key={category.id}>
                  <td>{category.category}</td>

                  <td>
                    <i
                      onClick={() =>
                        history.push(`/categoryForm/${category._id}`)
                      }
                      style={{ cursor: "pointer" }}
                      className="fas fa-edit"
                    ></i>
                  </td>
                  <td>
                    <i
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteHandler(category)}
                      className="fas fa-trash"
                    ></i>
                  </td>
                </tr>
              )
            ),
          )}
        </tbody>
      </table>
    </>
  );
};

export default Category;
