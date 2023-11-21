import React from "react";
import "../styles/Footer.css";
import applePayLogo from "../assets/applePayLogo.png";
import americanExpressLogo from "../assets/americanExpressLogo.png";
import visaLogo from "../assets/visaLogo.png";
import stripeLogo from "../assets/stripeLogo.png";
import masterCardLogo from "../assets/masterCardLogo.png";
import paypalLogo from "../assets/paypalLogo.png";

const Footer = () => {


    return (
        <div className="Footer">
            <div className="footerInfoBoxContainer">
                <div className="footerInfoContainer">
                    <h2>karall.dev</h2>
                    <p>Kaiserwasser</p>
                    <p>1220</p>
                    <p>Vienna</p>
                    <p>+43 676 4604798</p>
                </div>
                <div className="footerInfoContainer">
                    <h2>Page</h2>
                    <ul>
                        <li className="footerLink">Home</li>
                        <li className="footerLink">Shop</li>
                        <li className="footerLink">Product</li>
                        <li className="footerLink">Articles</li>
                        <li className="footerLink">Contact Us</li>
                    </ul>
                </div>
                <div className="footerInfoContainer">
                    <h2>Info</h2>
                    <ul>
                        <li className="footerLink">Shipping Policy</li>
                        <li className="footerLink">Return & Refund</li>
                        <li className="footerLink">Support</li>
                        <li className="footerLink">FAQs</li>
                    </ul>
                </div>
                <div className="footerInfoContainer">
                    <h2>Join Newsletter</h2>
                    <p>Subscribe our newsletter to get more deals,</p>
                    <p> new products and promotions.</p>
                    <input 
                        placeholder="Enter your email"
                        className="newsletterInput"
                    />
                </div>
            </div>
            <div className="FooterDivider"></div>
            <div className="copyRightContainer">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p>Copyright 2023 karall.dev. All rights reserved | <span></span></p>
                </div>
                <div className="payMethodsContainer">
                    <img alt="" className="payMethod" src={visaLogo} />
                    <img alt="" className="payMethod" src={americanExpressLogo} />
                    <img alt="" className="payMethod" src={masterCardLogo} />
                    <img alt="" className="payMethod" src={stripeLogo} />
                    <img alt="" className="payMethod" src={paypalLogo} />
                    <img alt="" className="payMethod" src={applePayLogo} />
                </div>
            </div>
        </div>
    )
}


export default Footer;