import React, { useState, useEffect } from "react";
import "../styles/ShopByCategories.css";
import CategoryItem from "./CategoryItem";


const ShopByCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://test.backend.crazysoziety.net/api/categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data))
    })

    return (
        <>
        <div className="ShopByCategoriesHeaderContainer">
            <h2>Shop by Categories</h2>
        </div>
        <div className="ShopByCategories">
            {categories.map((category) => (
                <CategoryItem
                    key={category._id} 
                    imageUrl={category.imageUrl} 
                    title={category.title}
                />
            ))}
        </div>
        </>
    )
}

export default ShopByCategories;