import React from "react";
import './HeroDrop.css'
const HeroDrop = ({ dropLabel,downLabel }) => {
  return (
    <div className="hero-drop">
      <div className="upper-drop">
        <p className="drop-head">{dropLabel}</p>
        <p className="svg"> - </p>
      </div>
      <div className="down-head"><p>{downLabel}</p></div>
    </div>
  );
};

export default HeroDrop;
