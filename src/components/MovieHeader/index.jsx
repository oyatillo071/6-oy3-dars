import React from "react";
import "./index.css";

function Header() {
  return (
    <>
      <div className="header">
        <a href="#"> Kino Ro'yhati</a>
        <ul className="list">
          <li className="list-items">
            <a href="#">Bosh sahifa</a>
          </li>
          <li className="list-items">
            <a href="#">Kinolar</a>
          </li>
          <li className="list-items">
            <a href="#">Yangiliklar</a>
          </li>
        </ul>
        <h3>5</h3>
      </div>
    </>
  );
}

export default Header;
