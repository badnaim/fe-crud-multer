import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import "../styles/dashboard.css";

export default function Dashboard() {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get("http://localhost:4000/get").then((res) => setProducts(res.data));
    console.log(setProducts);
  }, []);
  return (
    <div>{products}</div>
  );
}
