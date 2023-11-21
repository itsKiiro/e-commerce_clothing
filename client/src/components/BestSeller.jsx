import React, { useState, useEffect } from "react";
import JustInCardItem from "./JustInCardItem";
import "../styles/BestSeller.css";

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        fetch(`https://test.backend.crazysoziety.net/api/best-seller`)
        .then((res) => res.json())
        .then((data) => setBestSeller(data))
    })

    return (
        <>
        <div className="bestSellerHeaderContainer">
            <h2>Best Seller</h2>
        </div>
        <div className="BestSeller">
            {bestSeller.map((item) => (
                <JustInCardItem 
                    key={item._id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                />
            ))}
        </div>
        </>
    )
}


export default BestSeller;