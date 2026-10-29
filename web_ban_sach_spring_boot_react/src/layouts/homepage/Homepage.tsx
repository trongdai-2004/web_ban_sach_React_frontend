import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";

import ListProduct from "../product/ListProduct";

interface HomePageProps{
    searchKeywords: string
}


function HomePage({searchKeywords}: HomePageProps) {
    return (
        <div>
            <Banner />
            <Carousel />
            <ListProduct searchKeywords={searchKeywords}  />
        </div>
    );
}

export default HomePage;