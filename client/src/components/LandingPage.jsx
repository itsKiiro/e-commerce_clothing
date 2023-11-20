import React from "react";
import "../styles/LandingPage.css";

import LandingPageImage from "../assets/landingPageImage_1.jpg";

const LandingPage = () => {


    return (
        <div className="LandingPage">
            <div className="leftSideContainer">
                <img src={LandingPageImage} alt="landingPage" />
            </div>
            <div className="rightSideContainer">
                <div className="landingHeaderContainer">
                    <h1>Bring the</h1>
                    <h1>warmth.</h1>  
                </div>
                <div className="landingInfoContainer">
                    <p>Everyone needs a good winter jacket.</p>
                    <p>Find yours with our collection and more.</p>
                </div>
                <button className="landingPageButton">Shop Now</button>
            </div>
        </div>
    )
}

export default LandingPage;