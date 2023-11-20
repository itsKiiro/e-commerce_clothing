import React, { useState, useEffect } from "react";
import JustInCardItem from "./JustInCardItem";
import "../styles/BestSeller.css";

const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/best-seller`)
        .then((res) => res.json())
        .then((data) => setBestSeller(data))
    })

    console.log(bestSeller)
    return (
        <>
        <div className="bestSellerHeaderContainer">
            <h2>Best Seller</h2>
        </div>
        <div className="BestSeller">
            {bestSeller.map((item) => (
                <JustInCardItem 
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