import React, { useState, useEffect } from "react";
import "../styles/LatestArticles.css";
import LatestArticleCardItem from "./LatestArticleCardItem";


const LatestArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/latestArticle`)
        .then((res) => res.json())
        .then((data) => setArticles(data))
    })

    return (
        <div className="LatestArticles">
            <div className="latestArticlesHeaderContainer">
                <h1>Latest Articles</h1>
                <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    View More <ion-icon name="arrow-forward-outline"></ion-icon>
                </p>
            </div>
            <div className="articlesContainer">
                {articles.map((article) => (
                    <LatestArticleCardItem 
                        imageUrl={article.imageUrl}
                        title={article.title}
                        link={article.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default LatestArticles;