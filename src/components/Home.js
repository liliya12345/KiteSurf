import React from 'react';

import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import About from "./About";
import ImgSlider from "./ImgSlider";
import {imagegalary} from "./imagegalary";
import {shop} from "./shop";
import ShopInfo from "./ShopInfo";
import ImgToGalage from "./ImgToGalage";





export default function Home(props) {
    return (
        <>
            <Header/>
             <Banner/>
            <About/>
            <ImgToGalage/>
            <Footer/>

        </>
    );
}

