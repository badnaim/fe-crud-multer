import React from "react";
import "../../styles/sidebar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { buttons } from "../../util/data";
// import Imgs1 from "../../images/sidebar-images/Imgs1";
// import Imgs2 from "../../images/sidebar-images/Imgs2";
// import Imgs3 from "../../images/sidebar-images/Imgs3";
// import Imgs4 from "../../images/sidebar-images/Imgs4";
// import Imgs5 from "../../images/sidebar-images/Imgs5";
// import Imgs6 from "../../images/sidebar-images/Imgs6";

export default function Sidebar() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="sideBar">
      {buttons.map((button, index) =>
        current === index ? (
          <button key={index} className="clicked menuBtn">
            <p>{button.img}</p>
            <p>{button.name}</p>
          </button>
        ) : (
          <button
            key={index}
            className="nonClicked menuBtn"
            onClick={() => {
              setCurrent(index);
              navigate(button.url);
            }}
          >
            <p>{button.img}</p>
            <p>{button.name}</p>
          </button>
        )
      )}
    </div>
  );
}
