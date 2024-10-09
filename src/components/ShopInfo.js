import React, {useState} from 'react';
import {Button, Card, Col, Container, Image, Nav, Row} from "react-bootstrap";
import icon from "../img/icons8-heart-50.png"
import ShopItemInfo from "./ShopItemInfo";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import ShopComponent from "./ShopComponent";
import ProductsItem from "./ProductsItem";
import Carousel from "react-bootstrap/Carousel";

export default function ShopInfo(props,) {



    return (
        <>


            <li className="nav-item py-2">
                <div>
                    <Row className="justify-content-start">
                        <Col sm={12}>
                            {/*<a href={"/shop/item"}  onClick={handleItem}>*/}
                            <Link to={`/shop/item/${props.id}`}>


                                <i className="bi bi-arrow-right-circle-fill"></i>
                                <Container className="position-relative mt-5 item-ls">
                                    <div className="justify-content-start  text-items ">
                                        <Image src={props.img[0]} alt="img" className="img-ls img-fluid"/>
                                        <p className="text-items my-3 text-3xl mb-0">{props.title}</p>
                                        <p className="p-0 mb-0">{props.kort_description}</p>
                                        <p className="p-0 mb-0 t-ls">{props.is}</p>
                                        <div
                                            className="text-star  text-dark bg-rosa px-3 py-1 rounded position-absolute"
                                            style={{top: "60%", left: "65%"}}
                                        >

                                            {props.star}
                                        </div>
                                        <button
                                            className="icon position-absolute"
                                            style={{
                                                top: "60%",
                                                left: "20%",
                                                backgroundImage: icon,
                                                width: "30px",
                                                height: "30px"
                                            }}/>


                                    </div>
                                </Container>
                                {/*</a>*/}
                            </Link>
                        </Col>
                    </Row>

                </div>
            </li>


        </>
    );
}

