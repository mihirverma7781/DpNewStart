import React from 'react'
import { AiFillStar } from "react-icons/ai";
import "./CatComp.css"

const CatComp = ({ className,imgurl,roomtype,price,}) => {
    return (
        <div className={className}>
            <img src={imgurl} alt="imgcat" srcset="" />
            <p className="room-type">{roomtype}</p>
            <p className="price">{price}</p>
            <p className="rating"><AiFillStar/>4.7 Superb</p>
        </div>
    )
}

export default CatComp
