import React from "react";
import "../styles/JustInCardItem.css";

const JustInCardItem = ({ imageUrl, title, price }) => {


    return (
        <div className="JustInCardItem">
            <img className="justInImage" src={`https://test.backend.crazysoziety.net/images/` + imageUrl} alt="item" />
            <h4 className="cardItemTitle">{title}</h4>
            <p>{price} €</p>
        </div>
    )
}


export default JustInCardItem;