import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const Product = () => {
  //to get URL without Props
  var history = useHistory();
  const [data, setData] = useState([]);
  async function fetchData() {
    const productAPI = "/product";

    await axios.get(productAPI).then((res) => {
      setData(res.data);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  const deleteHandler = async (product) => {
    const oldProduct = { ...data };
    const newProduct = data.filter((p) => p.id !== product.id);
    setData(newProduct);
    try {
      await axios.delete("/product/" + product._id);
    } catch (e) {
      toast.error("can't delete");
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        onClick={() => history.push("/productsForm/new")}
        className="btn btn-primary m-2"
      >
        Add
      </button>
      <table className="table table-striped">
        <thead className="table-success">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (product) => (
              (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.category.category}</td>
                  <td>
                    <i
                      onClick={() =>
                        history.push(`/productsForm/${product._id}`)
                      }
                      style={{ cursor: "pointer" }}
                      className="fas fa-edit"
                    ></i>
                  </td>
                  <td>
                    <i
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteHandler(product)}
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

export default Product;
