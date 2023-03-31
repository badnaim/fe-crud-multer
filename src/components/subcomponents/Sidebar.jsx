import React, { useEffect } from "react";
import "../../styles/sidebar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { buttons } from "../../util/data";
import { useParams } from "react-router-dom";

export default function Sidebar() {
  const [current, setCurrent] = useState();
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    setCurrent(localStorage.getItem("currentButton") && localStorage.getItem("currentButton"));
  }, []);
  // console.log(current);
  console.log("param", param);

  return (
    <div className="sideBar">
      {buttons && buttons.map((button, index) =>
      (
        <button
          key={index}
          className={current === button.name ? "clicked menuBtn" : "nonClicked menuBtn"}
          onClick={() => {
            localStorage.setItem("currentButton", button.name);
            setCurrent(button.name);
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
