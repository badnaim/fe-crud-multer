import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import AddProduct from "../components/subcomponents/Addproduct";
import Img1 from "../images/Img1";
import All from "../images/sidebar-images/All";
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
        <Button variant="primary" onClick={handleShow} className="canvasBtn">
          <Img1 />
          Бараа нэмэх
        </Button>
        <button className="allButton">
          <div>
            <All />
            Бүгд
          </div>
        </button>
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Add product</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <AddProduct />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
