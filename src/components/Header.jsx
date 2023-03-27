import React, { useState } from "react";
import MainLogo from "../images/MainLogo";
import "../styles/header.css";

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <header>
      <div className="navSec">
        <div>
          <MainLogo />
        </div>
        <div className="searchSec">
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          <button>Search</button>
        </div>
        <div>Sign in</div>
      </div>
    </header>
  );
}
