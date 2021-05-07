import React from 'react'
import CompRooms from '../../components/Rooms/CompRooms'
import "./Rooms.css"
import roomImage from "./rooms.jpg"

const Rooms = () => {
    return (
        <div className="main-room">
            <h1 className="service-head"> Your room</h1>
        <div className="room">
            <div className="room-upper">
                <CompRooms className="first" num="01" roomhead="Visit our website page to start explore" roomtext="llorem ipsum random text" />
                <CompRooms className="second" num="02" roomhead="Determine your needs before booking" roomtext="llorem ipsum random text" />
                <CompRooms className="second" num="03" roomhead="Start exploring our best room service" roomtext="llorem ipsum random text" />
                <CompRooms className="second" num="04" roomhead="Book it  & save enterance reservation" roomtext="llorem ipsum random text" />
            </div>
            <div className="room-lower" data-aos="zoom-out-left">
                <img src={roomImage} alt="rooms" srcset=""/>
            </div>
        </div>
        </div>
    )
}

export default Rooms