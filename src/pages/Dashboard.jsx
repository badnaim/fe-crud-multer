import axios from "axios";
import React, { useEffect } from "react";
// import axios from "axios";
import { useState } from "react";
import Product from "../components/subcomponents/Product";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/getProducts")
      .then((res) => {
        // console.log(res.data.body);
        setProducts(res.data.body);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   async function fetchProdData() {
  //     let response = await fetch("http://localhost:4000/getProducts");
  //     response = await response.json();
  //     setProducts(JSON.stringify(response.body));
  //   }
  //   fetchProdData();
  // }, []);

  console.log("products", products);

  return (
    <div className="dashBoard">
      {products &&
        products.map((prod, index) => <Product data={prod} key={index} />)}
    </div>
  );
}
