import React from 'react';
import "../../styles/sidebar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { buttons } from "../../util/data";

export default function Sidebar() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="sideBar">
      {buttons.map((button, index) => current === index ? (
        <button key={index} className="clicked menuBtn">
          {button.name}
        </button>
      ) : (
        <button key={index} className="nonClicked menuBtn" onClick={() => {
          setCurrent(index);
          navigate(button.url);
        }}>
          {button.name}
        </button>
      )
      )}
    </div>
  );
}
