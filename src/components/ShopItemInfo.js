import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import {Accordion, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {shop} from "./shop";
import NavibarShop from "./NavibarShop";
import Footer from "./Footer";


export default function ShopItemInfo(itemShop) {
    let {id} = useParams();


    return (
        <>
            <div className="bg-light">
                <NavibarShop/>
                {shop.map(product =>
                    <div className="bg-light"
                         key={product.id}
                    >
                        {product.id == id && (

                            <Container className="position-relative mt-5 item-ls">
                                <Row>
                                    <Col className="m-5 w-50" lg={6} md={12} sm={12} xs={12}>
                                        <div>
                                            <Carousel style={{overflow:"hidden"}} className="w-70">
                                                <Carousel.Item>
                                                    <Image src={product.img[0]} style={{overflow:"hidden"}}/>
                                                    <Carousel.Caption>
                                                        <h3>First slide label</h3>
                                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={product.img[1]} style={{overflow:"hidden"}}/>
                                                    <Carousel.Caption>
                                                        <h3>Second slide label</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <Image src={product.img[2]} style={{overflow:"hidden"}}/>
                                                    <Carousel.Caption>
                                                        <h3>Third slide label</h3>
                                                        <p>
                                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                                        </p>
                                                    </Carousel.Caption>
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>


                                    </Col>
                                    <Col >
                                        <h3 className="moris text-items "
                                            style={{
                                                fontSize: "22px",
                                                fontWeight: "bold"
                                            }}>{product.title}</h3>
                                        <p className="p-0 m-2 t-ls" style={{
                                            fontSize: "16px"
                                        }}>{product.description}</p>
                                        <p className="p-0 m-2 t-ls" style={{
                                            fontSize: "16px",
                                            fontWeight: "bold"
                                        }}>{product.pris}</p>
                                        <p className=" p-0 m-2 t-ls" style={{
                                            fontSize: "14px"
                                        }}>{product.current}</p>
                                        <button className=" p-0 m-0 btn-product justify-content-center" >
                                           <p className=" p-1 m-0 btn-product justify-content-center">Lägg till</p>
                                        </button>


                                        <Row>
                                            <Col className=" py-5 mt-5  ">
                                                <Accordion>
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                        <Accordion.Body>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </Col>
                                        </Row>
                                    </Col>

                                </Row>

                            </Container>


                        )
                        }
                    </div>
                )}
            </div>

            <Footer/>

        </>
    );
}

