// import React from "react";
import "./secondNavbar.css";
import { Link } from "react-router-dom";

const SecondNavbar = () => {
  return (
    <div className="navbar menu">
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondNavbar;
