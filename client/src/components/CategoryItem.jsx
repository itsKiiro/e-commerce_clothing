import React from "react";
import "../styles/CategoryItem.css";


const CategoryItem = ({ imageUrl, title }) => {


    return (
        <div className="CategoryItem">
            <img className="categoryImage" src={`https://test.backend.crazysoziety.net/images/` + imageUrl} alt="category"/>
            <h4>{title}</h4>
        </div>
    )
}

export default CategoryItem;