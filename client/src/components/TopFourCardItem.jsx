import React from "react";
import "../styles/TopFourCardItem.css";

const TopFourCardItem = ({ imageUrl, title, text }) => {


    return (
        <div className="TopFourCardItem">
            <img className="topFourImage" src={`https://test.backend.crazysoziety.net/images/` + imageUrl} alt="top"/>
            <div className="topFourContainer">
                <h4 className="topFourTitle">{title}</h4>
                <p className="topFourText">{text}</p>
            </div>

        </div>
    )
}


export default TopFourCardItem;