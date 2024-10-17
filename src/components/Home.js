import React from 'react';
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import About from "./About";
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

