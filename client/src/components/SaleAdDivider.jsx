import React from "react";
import "../styles/SaleAdDivider.css";
import saleAdImage from "../assets/saleAdImage.jpg";

const SaleAdDivider = () => {


    return (
        <div className="SaleAdDivider">
            <div className="saleLeftSide">
                <img 
                    className="saleImage"
                    src={saleAdImage}
                    alt="Sale"
                />
            </div>
            <div className="saleRightSide">
                <div className="saleInfoContainer">
                    <h2 style={{ color: "#377DFF", marginBottom: "1rem" }}>SALE UP TO 35% OFF</h2>
                    <h1>HUNDREDS of</h1>
                    <h1 style={{ marginBottom: "2rem" }}>New lower prices!</h1>
                    <p style={{ fontWeight: "300", marginBottom: "20px" }}>Hurry up!! Winter is coming!</p>
                    <h4 className="shopNowAd">Shop Now <ion-icon name="arrow-forward-outline"></ion-icon></h4>
                </div>
            </div>
        </div>
    )
}

export default SaleAdDivider;