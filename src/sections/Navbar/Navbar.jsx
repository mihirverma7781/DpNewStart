import React from "react";
import Button from "../../components/Button/Button";
import './Navbar.css'

const Navbar = ({ navitems }) => {
  // let listitems;
  return (
    <div className="navbar">
      <div className="logo-section">
        <h4 className="nav-head">Kerdja.</h4>
      </div>
      <div className="navigation-section">
        <ul className="nav-ul">
          {
             navitems.map((item) => (
              <li className="nav-list">{item}</li>
            ))
          }
        </ul>
        <Button label="BOOK NOW" />
      </div>
    </div>
  );
};

export default Navbar;
