import React from 'react'
import CustomerComp from '../../components/CustomerComp/CustomerComp'
import customerImage from "./cust.png"
import "./Customer.css"
const Customer = () => {
    return (
        <div className="c-main">
              <h4 className="service-label c-label" >TESTIMONY</h4>
            <h1 className="service-head c-head" >What our beloved <br/>customers say</h1>
        <div className="customer" >
            <CustomerComp imgurl={customerImage} title="Precilla Teacherson " occ="Teacher" reviews="Lorem Ipsum isin. Lorem Ipsum has been the industry's standard " />
            <CustomerComp imgurl={customerImage} title="Christian Breadwork " occ="Freelancer" reviews="Lorem Inting and typesetting industry. Lorem Ipsum has been the industry's standard " />
            <CustomerComp imgurl={customerImage} title="Pamela Underscore " occ="Student" reviews="Lorem Ipsum is sim typesettsum has been the industry's standard " />
        </div>
        </div>
    )
}

export default Customer
