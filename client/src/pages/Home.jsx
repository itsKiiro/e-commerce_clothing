import React from "react";
import LandingPage from "../components/LandingPage";
import LandingPageDivider from "../components/LandingPageDivider";
import JustIn from "../components/JustIn";
import ShopByCategories from "../components/ShopByCategories";
import TopFour from "../components/TopFour";
import BestSeller from "../components/BestSeller";
import SaleAdDivider from "../components/SaleAdDivider";
import Promotion from "../components/Promotion";
import LatestArticles from "../components/LatestArticles";
import Newsfeed from "../components/Newsfeed";


const Home = () => {

    return (
        <div className="Home">
            <LandingPage />
            <LandingPageDivider />
            <JustIn />
            <ShopByCategories />
            <TopFour />
            <BestSeller />
            <SaleAdDivider />
            <Promotion />
            <LatestArticles />
            <Newsfeed />
        </div>
    )
}

export default Home;