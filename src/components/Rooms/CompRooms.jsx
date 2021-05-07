import React from 'react'
import './Comprooms.css'

const CompRooms = ({className,num,roomhead,roomtext}) => {
    return (
        <div className={className} data-aos="zoom-out-right">
            <div className="room-num">
                <h3>
                    {num}
                </h3>
            </div>
            <p className="room-head">
                {roomhead}
            </p>
            <p className="room-text">
                {roomtext}
            </p>
        </div>
    )
}

export default CompRooms
