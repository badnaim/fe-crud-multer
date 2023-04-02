import React, { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import AddCategory from "../components/subcomponents/AddCategory";
import AddProduct from "../components/subcomponents/Addproduct";
import ProductRows from "../components/subcomponents/ProductRows";
import Img1 from "../images/Img1";
import Imgs2 from "../images/sidebar-images/Imgs2";
// import axios from "axios";
// import All from "../images/All";
// import SelectImg from "../images/SelectImg";
import "../styles/products.css";

export default function Products() {
  //offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //offcanvas

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/getCategories")
  //     .then((res) => {
  //       setCategories(res.data.body);
  //       // console.log("c", categories);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="products">
      <div className="flex">
        <Imgs2 />
        <h5>Хянах самбар</h5>
      </div>
      <div className="lineOfRoutes"></div>
      <div className="productsIn">
        <div>
          <button variant="primary" onClick={handleShow} className="canvasBtn">
            <Img1 />
            Бараа нэмэх
          </button>
          <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton>
              <h2>Add products</h2>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <AddCategory />
              <div id="lineInCanvas"></div>
              <AddProduct />
            </Offcanvas.Body>
          </Offcanvas>

          <select className="allButton">
            <option>Бүгд</option>
            <option>one</option>
            <option>two</option>
          </select>
        </div>
        <div id="searchInProds"><input placeholder="Хайх" /></div>
      </div>

      <ProductRows />

    </div>
  );
}
