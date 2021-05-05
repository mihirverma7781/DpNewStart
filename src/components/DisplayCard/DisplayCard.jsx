import React from 'react'
import './DisplayCard.css'

const DisplayCard = ({dispimage,disphead,disppara,head,para,displaycard}) => {
    return (
        <div className={displaycard}>
                <img src={dispimage} alt="image" srcset="" className="displayimage"/>
                <h4 className={disphead}>{head}</h4>
                <p className={disppara}>{para}</p>
        </div>
    )
}

export default DisplayCard
