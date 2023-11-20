import React, { useState, useEffect } from "react";
import "../styles/TopFour.css";
import TopFourCardItem from "./TopFourCardItem";

const TopFour = () => {

    const [topFour, setTopFour] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/top-four-items`)
        .then((res) => res.json())
        .then((data) => setTopFour(data))
    })

    return (
        <div className="TopFour">
            {topFour.map((item) => (
                <TopFourCardItem 
                    key={item._id}
                    imageUrl={item.imageUrl}
                    title={item.title}
                />
            ))}
        </div>
    )
}


export default TopFour;