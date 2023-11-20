import React from "react";
import "../styles/LandingPageDivider.css";
import hmLogo from "../assets/H&M-Logo.svg.png";
import louiLogo from "../assets/louiLogo.png";
import gucciLogo from "../assets/gucciLogo.png";
import zalandoLogo from "../assets/zalandoLogo.png";
import newYorkerLogo from "../assets/newYorkerLogo.png";

const LandingPageDivider = () => {


    return (
        <div className="LandingPageDivider">
            <div className="trendingBrandsInfo">
               <h3>Trending Brands</h3> 
            </div>
            <div className="trendingBrands">
                <h1 className="brand"><img className="logoImg" src={louiLogo} alt="logo" />Loui Vitton</h1>
                <h1 className="brand"><img className="logoImg" src={gucciLogo} alt="logo" />Gucci</h1>
                <h1 className="brand"><img className="logoImg" src={zalandoLogo} alt="logo" />Zalando</h1>
                <h1 className="brand"><img className="logoImg" src={hmLogo} alt="logo" />H&M</h1>
                <h1 className="brand"><img className="logoImg" src={newYorkerLogo} alt="logo" />New Yorker</h1>
            </div>
        </div>
    )
}


export default LandingPageDivider;