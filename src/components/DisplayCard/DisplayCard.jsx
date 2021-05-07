import React from 'react'
import './DisplayCard.css'

const DisplayCard = ({dispimage,disphead,disppara,head,para,displaycard}) => {
    return (
        <div className={displaycard} data-aos="zoom-out-up">
                <img src={dispimage} alt="imagedisplay" srcset="" className="displayimage"/>
                <h4 className={disphead}>{head}</h4>
                <p className={disppara}>{para}</p>
        </div>
    )
}

export default DisplayCard
