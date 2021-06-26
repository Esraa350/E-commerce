import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCategory from "./cardCategory";

const Category = ({ categories }) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const categoryAPI = "/category";

    await axios.get(categoryAPI).then((res) => {
      setData(res.data);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="row">
      <CardCategory categories={data} />
    </div>
  );
};
export default Category;
