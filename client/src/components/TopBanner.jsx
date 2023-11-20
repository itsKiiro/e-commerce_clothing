import React, { useState } from "react";
import "../styles/TopBanner.css";

const TopBanner = () => {

    const [isVisible, setIsVisible] = useState(true);

    const handleCloseClick = () => {
        setIsVisible(false);
    }

    if (!isVisible) return null;

    return (
        <div className="TopBanner">
            <h2>30% off storewide - Limited time! <span>Shop Now</span></h2>
            <ion-icon name="close-outline" onClick={handleCloseClick}></ion-icon>
        </div>
    )
}

export default TopBanner;