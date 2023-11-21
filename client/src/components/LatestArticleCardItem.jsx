import React from "react";
import "../styles/LatestArticleCardItem.css";


const LatestArticleCardItem = ({ imageUrl, title, link }) => {


    return (
        <div className="LatestArticleCardItem">
            <img 
                src={`https://test.backend.crazysoziety.net/images/` + imageUrl}
                alt="blog"
                className="latestArticleImage"
            />
            <p>{title}</p>
            <a href={link} rel="noreferrer" target="_blank">Read More</a>
        </div>
    )
}

export default LatestArticleCardItem;