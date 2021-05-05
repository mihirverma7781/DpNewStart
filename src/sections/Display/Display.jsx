import React from 'react'
import DisplayCard from '../../components/DisplayCard/DisplayCard'
import "./Display.css"
import Path1 from "./Path1.png"
import Path4 from "./Path4.png"
import Path6 from "./17.png"

const Display = () => {
    return (
        <div className="services-display">
        <div className="service-upper">
            <h4 className="service-label">WHY SHOULD US</h4>
            <h1 className="service-head">Easy Step to book Your room</h1>
        </div>
        <div className="service-lower">
            <DisplayCard displaycard="grey" dispimage={Path1} disphead="side" disppara="side-para" head="Air Conditioner"  para="Game-plan UI low engagement nor what are the expectations, and cloud native.
container based parallel" />
            <DisplayCard displaycard="orange" dispimage={Path6} disphead="main" disppara="main-para" head="High Speed WiFi"  para="Connection is our vital aspects, so we provide a high speed connection to help you browse through the internet" />
            <DisplayCard displaycard="grey" dispimage={Path4} disphead="side" disppara="side-para" head="High quality projector"  para="We provided a latest high quality LCD projector in every rooms in order to ease you to do a sudden presentation" />
            </div>
        </div>
    )
}

export default Display
