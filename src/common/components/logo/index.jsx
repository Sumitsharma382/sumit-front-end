import React from "react";
import "./logo.css"
import logo from "../../assests/images/logo.svg"
const Logo=props=>{
      const{lightMode}=props;
      const textColor=lightMode?"white-color":" black-color"   

    return(
        <div className="d-flex align-items-center cursor-pointer"> 
           <img src={logo} alt="logo of company coffeee"/>
           <div className={`logo-text mx-2 ${textColor}`}>Coffeee</div>
        </div>
    )

};
export default Logo;
