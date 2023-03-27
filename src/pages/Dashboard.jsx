import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import "../styles/dashboard.css";

export default function Dashboard() {
  const [products, setProducts] = useState();
  const [location, setLocation] = useState();

  // useEffect(() => {
  //   axios.get("http://localhost:4000/get").then((res) => setProducts(res.data));
  //   console.log(setProducts);
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/nearrestaurant")
      .then((res) => setLocation(res.data));
    console.log(setLocation);
  }, []);

  // fetch("http://localhost:4000/nearrestaurant", { method: "GET" }).then((res) =>
  //   console.log(res)
  // );

  return <div>{/* {products} */}</div>;
}
