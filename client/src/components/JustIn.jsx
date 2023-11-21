import React, { useEffect, useState } from "react";
import "../styles/JustIn.css";
import JustInCardItem from "./JustInCardItem";

const JustIn = () => {

    const [justInItems, setJustInItems] = useState([]);

    useEffect(() => {
        fetch(`https://test.backend.crazysoziety.net/api/just-in-items`)
        .then((res) => res.json())
        .then((data) => setJustInItems(data))
    })

    return (
        <div className="JustIn">
            <div className="JustInHeaderContainer">
                <h1>Just In</h1>
            </div>
            <div className="justInCardContainer">
                {justInItems.map((item) => (
                    <JustInCardItem 
                        key={item._id}
                        imageUrl={item.imageUrl} 
                        title={item.title}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default JustIn;