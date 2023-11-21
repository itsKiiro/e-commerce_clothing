import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {

    return (
        <div className="Navbar">
            <div className="logoContainer">
                <ion-icon name="menu-outline"></ion-icon>
                <h1 className="logo">Shop</h1>
            </div>
            <ul className="navLinksContainer">
                <li className="navLink">Home</li>
                <li className="navLink">Shop <ion-icon name="chevron-down-outline"></ion-icon></li>
                <li className="navLink">Product <ion-icon name="chevron-down-outline"></ion-icon></li>
                <li className="navLink">Contact us</li>
            </ul>
            <ul className="navIconsContainer">
                <li className="navIcon"><ion-icon name="search-outline"></ion-icon></li>
                <li className="navIcon"><ion-icon name="person-circle-outline"></ion-icon></li>
                <li className="navIcon"><ion-icon name="cart-outline"></ion-icon></li>
            </ul>
        </div>
    )
}

export default Navbar;