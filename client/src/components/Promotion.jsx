import React from "react";
import "../styles/Promotion.css";
import promoThumbnail from "../assets/promoThumbnail.jpeg";

const Promotion = () => {

    return (
        <div className="Promotion">
            <div className="promoInfoContainer">
                <h2 style={{ color: "#377DFF" }}>PROMOTION</h2>
                <h1>Winter Collection</h1>
                <p>Introducing the new winter jackets.</p>
            </div>
            <div className="promoVideoContainer">
                <img 
                    className="promoThumbnail"
                    alt="Thumbnail"
                    src={promoThumbnail}
                />
            </div>
        </div>
    )
}

export default Promotion;