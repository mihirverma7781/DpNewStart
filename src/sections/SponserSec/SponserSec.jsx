import React from 'react'
import Sponser from '../../components/Sponser/Sponser'
import './SponserSec.css'
const SponserSec = () => {
    return (
        <div className="sponser-sec">
            <Sponser src={"https://www.pngitem.com/pimgs/m/169-1691864_ikea-hd-png-download.png"}/>
            <Sponser src={"https://www.krisbow.com/static/frontend/Kawanlama/default/en_US/images/new_logo.png"}/>
            <Sponser src={"https://cooksoncreative.files.wordpress.com/2020/04/logo-microsoft-404px-grey.png"}/>
            <Sponser src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Google_2015_logo_colorless_mourning_period.svg/1024px-Google_2015_logo_colorless_mourning_period.svg.png"}/>
            <Sponser src={"https://dublintechsummit.com/wp-content/uploads/sites/7/2019/03/wework-logo-grey.png"}/>
        </div>
    )
}

export default SponserSec
