import Carousel from 'react-bootstrap/Carousel';

import React from "react";
import hero from "../img/hero.png";
import {Col, Container, Row} from "react-bootstrap";
import surf1 from "../img/kite13.webp";
import surf2 from "../img/surf2.jpg";
import surf3 from "../img/surf3.jpg";
import surf4 from "../img/kite12.jpg";

export default function MinCarousel(props) {
    return (

        <>
            <Carousel className="carousel-navbar2">
                <Carousel.Item interval={800}>
                    <img src={surf1} text="First slide" className="img-navbar2" alt="img"/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={surf4} text="First slide" className="img-navbar2" alt="img"/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img src={surf3} text="First slide" className="img-navbar2" alt="img"/>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>


    );
}

