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

        <Carousel className="carousel-navbar2">
            <Carousel.Item interval={1000}>
                <img src={surf1} text="First slide" className="img-navbar2" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src={surf4} text="First slide" className="img-navbar2"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={surf3} text="First slide" className="img-navbar2"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
}

