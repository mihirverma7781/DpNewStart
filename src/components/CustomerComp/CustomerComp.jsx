import React from 'react'
import './CustomerComp.css'

const CustomerComp = ({imgurl, title,reviews,occ}) => {
    return (
        <div className="cust-comp" data-aos="zoom-out-down">
            <div className="cust-upper">
                <img src={imgurl} alt="" srcset="" />
                <p className="cust-title">{title} <small>{occ}</small></p>
            </div>
            <div className="cust-lower">
            <p className="reviews">
                {reviews}
            </p>    
            </div>            
        </div>
    )
}

export default CustomerComp
