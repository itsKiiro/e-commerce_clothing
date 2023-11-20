import React from "react";
import "../styles/JustInCardItem.css";

const JustInCardItem = ({ imageUrl, title, price }) => {


    return (
        <div className="JustInCardItem">
            <img className="justInImage" src={`http://localhost:8080/images/` + imageUrl} alt="item" />
            <h4>{title}</h4>
            <p>{price} €</p>
        </div>
    )
}


export default JustInCardItem;