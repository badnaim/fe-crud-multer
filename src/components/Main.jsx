import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Users from "../pages/Users";
import Moderator from "../pages/Moderator";
import Settings from "../pages/Settings";
import Orders from "../pages/Orders";
import Sidebar from "./subcomponents/Sidebar";
// import { addContext } from "../context/addContext";
import "../styles/main.css";

export default function Main() {
  return (
    <main>
      <div className="leftSec"><Sidebar /></div>
      <div className="rightSec">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/moderator" element={<Moderator />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </main>
  );
}
