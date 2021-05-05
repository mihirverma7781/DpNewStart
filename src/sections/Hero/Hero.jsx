import React from "react";
import hero from "../../assets/images/hero.jpg";
import Button from "../../components/Button/Button";
import HeroDrop from "../../components/HeroDrop/HeroDrop";
import "./Hero.css";


const Hero = () => {
  return (
    <div className="hero">
      <div className="heroImage">
        <img src={hero} alt="" srcset="" />
      </div>

      <div className="hero-text">
        <h1 className="hero-head">
          Stimulates <br /> your idea here
        </h1>
        <p className="hero-para">
          We believe that great idea always <br /> come in right time and right
          place.
          <br />
          Book Your place and Find your idea.
        </p>
        <div className="drop-comps">
            <HeroDrop dropLabel="When" downLabel="24December"/>
            <HeroDrop dropLabel="How long" downLabel="2 Hours"/>
            <HeroDrop dropLabel="Type" downLabel="Seminar"/>
            <Button className="hero-btn" label="S"/>
        </div>

        <div className="playlist">
            <div className="play-btn">
            <img src="https://img.icons8.com/ios-filled/50/000000/circled-play.png" alt="img"/>
            </div>
            <div className="play-btn">
            <img src="https://img.icons8.com/ios-filled/50/000000/circled-play.png" alt="img"/>
            </div>
            <div className="play-btn">
            <img src="https://img.icons8.com/ios-filled/50/000000/circled-play.png" alt="img"/>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Hero;
