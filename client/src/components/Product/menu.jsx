import React,{useState,useEffect} from "react";
import Card from './cardProduct';
import axios from "axios";
const Menu = () => {
   const [data, setData] = useState([]);
   async function fetchData() {
    const productAPI = "/product";

    await axios.get(productAPI).then((res) => {
      setData(res.data);
    });
   }
  useEffect(() => {
    fetchData()
  }, []);
  return (   
    <>
      <h1>Menu</h1>
      <div className="row">
      <Card products={data} />
     </div>
      </>
   );
}
export default Menu;
