import React from "react";
import "../styles/Newsfeed.css";
import insta_1 from "../assets/insta_1.jpg";
import insta_2 from "../assets/insta_2.jpg";
import insta_3 from "../assets/insta_3.jpeg";
import insta_4 from "../assets/insta_4.jpeg";


const Newsfeed = () => {

    return (
        <div className="Newsfeed">
            <div className="newsfeedHeaderContainer">
                <h2 className="newsfeedTextLight">NEWSFEED</h2>
                <h1 className="newsfeedTextStrong">Instagram</h1>
                <p>Follow us on social media for more discount & promotions</p>
                <h2 className="newsfeedTextLight">@marcel_revo</h2>
            </div>
            <div className="newsfeedImageContainer">
                <img src={insta_1} alt="profile" />
                <img src={insta_2} alt="profile" />
                <img src={insta_3} alt="profile" />
                <img src={insta_4} alt="profile" />
            </div>
            <div className="newsfeedInfoContainer">
                <div className="newsfeedIconContainer">
                    <ion-icon name="boat-outline"></ion-icon>
                    <h2>Free Shipping</h2>
                    <p>Order above 200 €</p>
                </div>
                <div className="newsfeedIconContainer">
                    <ion-icon name="wallet-outline"></ion-icon>
                    <h2>Money-back</h2>
                    <p>30 days guarantee</p>
                </div>
                <div className="newsfeedIconContainer">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <h2>Secure Payments</h2>
                    <p>Secured by Stripe</p>
                </div>
                <div className="newsfeedIconContainer">
                    <ion-icon name="call-outline"></ion-icon>
                    <h2>24/7 Support</h2>
                    <p>Phone and Email support</p>
                </div>
            </div>
        </div>
    )
}

export default Newsfeed;