import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="app-header">
      <header>
        <h1 className="header-logo">Bank App</h1>
        <ul>
          <li>
            <a className="LinkOne" href="/Home">
              Home{" "}
            </a>
          </li>
          <li>
            <a className="LinkTwo" href="/Display">
              See All{" "}
            </a>
          </li>
          <li>
            <a className="LinkThree" href="/Deposit">
              Create Deposit{" "}
            </a>
          </li>
          <li>
            <a className="LinkFour" href="/Search">
              Search Deposit{" "}
            </a>
          </li>
          <li>
            <a className="LinkFive" href="/Projections">
              Financial Projections{" "}
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
