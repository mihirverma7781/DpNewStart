import React from 'react'
import Button from '../../components/Button/Button'
import CatComp from '../../components/CatComp/CatComp'
import"./Category.css"

const Category = () => {
    return (
        <div className="category">
           
        <div className="cat-head" data-aos="zoom-out-right">
        <p className="cat-label">Categories</p>
            <h1 className="cat-h1"> Browse all of your services</h1>
            <Button className="cat-btn" label="Browse All"  />
        </div>

            <div className="cat-elems">
                <div className="catelem-inner catelem-inner1"  data-aos="fade-up"><CatComp className="cat-comp cat-comp1" imgurl="https://media.radissonhotels.net/image/radisson-blu-hotel-indore/guestroom/16256-116514-f64878631_3xl.jpg" roomtype="-Private Room" price="$120" /></div>
                <div className="catelem-inner catelem-inner2"  data-aos="fade-up"><CatComp className="cat-comp cat-comp2" imgurl="https://media.radissonhotels.net/image/radisson-blu-hotel-indore/guestroom/16256-116514-f64878631_3xl.jpg" roomtype="-Meeting Room" price="$110" /></div>
                <div className="catelem-inner catelem-inner3"  data-aos="fade-up"><CatComp className="cat-comp cat-comp3" imgurl="https://media.radissonhotels.net/image/radisson-blu-hotel-indore/guestroom/16256-116514-f64878631_3xl.jpg" roomtype="-Seminar Room" price="$140" /></div>
            </div>
            
        </div>
    )
}

export default Category
