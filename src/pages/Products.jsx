import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import AddCategory from "../components/subcomponents/AddCategory";
import AddProduct from "../components/subcomponents/Addproduct";
import Img1 from "../images/Img1";
// import All from "../images/All";
// import SelectImg from "../images/SelectImg";
import "../styles/products.css";

export default function Products() {
  //offcanvas
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //offcanvas

  return (
    <div>
      <div>
        <button variant="primary" onClick={handleShow} className="canvasBtn">
          <Img1 />
          Бараа нэмэх
        </button>
        <select className="allButton">
          {/* <All /> */}
          <option>Бүгд</option>
          <option>one</option>
          <option>two</option>
        </select>

        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Add product</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <AddCategory />
            <AddProduct />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
