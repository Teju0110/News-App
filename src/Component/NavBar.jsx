import React from "react";
import icon from "../Images/icon.png";
import Menu from "./Menu";
import "./NavBar.css";

const NavBar = ({setCategory}) => {
  return (
    <div className="navBar">
      <div className="menu">
          <Menu className='menuIcon' setCategory={setCategory}/>
          <h5>Menu</h5>
        </div>
      <div className="icon">
        <img src={icon} alt="" className="navIcon" />
        <div className="NavBarTitle">
          <h1>Top News App</h1>
          <span>Stay Updated</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
