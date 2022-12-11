import React from "react";
import mobileLarge from "../../assests/images/mobile-large.svg";
import mobileBottom from "../../assests/images/mobile-bottom.svg";
import "./banner.css";
import Logo from "../logo";
const Banner = () => {
    return (
        <div className="app-banner">
            <div className="padding-100">
                <Logo lightMode  />
                <img src={mobileLarge} alt=' mobile icon' className='relative top60' />

                <img src={mobileBottom} alt=' mobile bottom'  />
                <div className='banner-text relative '>
                    India's Leading Mobile Comparision Portal
                </div>
            </div>
        </div>
    )
};

export default Banner;
