import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import {hero} from "../img/hero.png"
import {shop} from './shop';

export default function CarouselItem(props) {



    return (

        <Carousel.Item img={props.img}>

            <img
                className="d-block w-100"
                src={props.img}
                alt="img"
            />
            <Carousel.Caption className="p-5 mb-5">
                        <span>
                            <h5 className="mr-de-haviland-regular text-white hero-text">{props.title}</h5>
                        </span>
                        <span>
                        <p className="lora">{props.description}</p>
                        </span>
            </Carousel.Caption>
        </Carousel.Item>
    );
}

