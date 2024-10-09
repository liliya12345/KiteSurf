import React from 'react';
import Navibar from "./Navibar";
import {Accordion, Col, Container, Image, Row} from "react-bootstrap";
import Footer from "./Footer";
import hero from '../img/surf3.jpg';
import {kurs} from "./kurs.js";
import Carousel from "react-bootstrap/Carousel";


function Kurser(props) {
    const clip = document.querySelectorAll(".hover-to-play");
    for (let i = 0; i < clip.length; i++) { clip[i].addEventListener("mouseenter", function (e) { clip[i].play();
    }); clip[i].addEventListener("mouseout", function (e) { clip[i].pause(); }); }
    return (
        <>
            <Navibar/>
            <Row >
                {/*<Image src={hero}></Image>*/}
                <video src="https://videos.pexels.com/video-files/4854353/4854353-hd_1920_1080_30fps.mp4" type="video/mp4" autoPlay loop muted
                       className=" w-100">
                </video>
                <span>
                    <p className="my-3 mr-de-havilan text-center"> Våra kurser</p>
                </span>
            </Row>
            {kurs.map(product =>
                <div className="bg-light"
                     key={product.id}
                >
                    {product.id === 1 && (

                        <Container className="my-3">
                            <Row>
                                <Col lg={6} xs={12} className="my-3">
                                    <h3 className="moris text-items "
                                        style={{
                                            fontSize: "22px",
                                            fontWeight: "bold"
                                        }}>{product.title}</h3>
                                    <p className="p-0 m-2 t-ls" style={{
                                        fontSize: "16px"
                                    }}>{product.description}</p>
                                    <p className="p-0 m-2 t-ls" style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        color:"black"
                                    }}>{product.pris}</p>
                                    <button className=" py-0 mt-5 btn-product justify-content-center">
                                        <p className="p-1 m-0">Boka</p>
                                    </button>
                                </Col>
                                <Col lg={6} xs={12} className="my-3">
                                    <Image src={product.img} className="image-kurs my-3"/>
                                </Col>
                            </Row>
                        </Container>
                    )
                    }
                    {product.id === 2 && (

                        <Container className="my-3">
                            <Row>
                                <Col lg={6} xs={12} className="my-3">
                                    <Image src={product.img} className="image-fluid image-kurs my-3"/>
                                </Col>

                                <Col lg={6} xs={12} className="my-3">
                                    <Row>
                                        <Col>
                                            <h3 className="moris text-items "
                                                style={{
                                                    fontSize: "22px",
                                                    fontWeight: "bold"
                                                }}>{product.title}</h3>
                                            <p className="p-0 m-2 t-ls" style={{
                                                fontSize: "16px"
                                            }}>{product.description}</p>
                                            <p className="p-0 m-2 t-ls" style={{
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                                color: "black"
                                            }}>{product.pris}</p>
                                            <Row>
                                                <Col className=" py-0 mt-0 ">
                                                    <Accordion className="w-75">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Heldagskurs  </Accordion.Header>
                                                            <Accordion.Body>
                                                                Heldagskurs – level 1 – 3,5h Pris:  2300:-
                                                                Lär dig grunderna kring kitesurfing och träna brädstarter. Följande moment går vi igenom under heldagskursen
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>Tvådagarskurs</Accordion.Header>
                                                            <Accordion.Body>
                                                                Tvådagarskurs  – level 1+2 – 7h Pris:  3800:-
                                                                Vår populäraste kurs! Under tvådagarskursen lär du dig såklart allt som ingår vid en heldagskurs, men vi har mer tid att öva på de viktigaste momenten för att du ska bli säkrare och bekvämare i att hantera kiten. Dag 2 lägger vi mer fokus på brädstarter och du kommer få köra flera vändor med brädan åt båda hållen. Under den här tvådagarskursen lägger vi grunden för att du ska kunna fortsätta kitesurfa på egen hand.
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                    </Accordion>
                                                </Col>
                                            </Row>
                                            <button className=" py-0 mt-5  my-3 btn-product justify-content-center">
                                                <p className="p-1 m-0">Boka</p>
                                            </button>
                                        </Col>

                                    </Row>

                                </Col>

                            </Row>


                        </Container>

                    )
                    }
                    {product.id === 3 && (

                        <Container className="my-3">
                            <Row>
                                <Col lg={6} xs={12} className="my-3">
                                    <Row>
                                        <Col>
                                            <h3 className="moris text-items "
                                                style={{
                                                    fontSize: "22px",
                                                    fontWeight: "bold"
                                                }}>{product.title}</h3>
                                            <p className="p-0 m-2 t-ls" style={{
                                                fontSize: "16px"
                                            }}>{product.description}</p>
                                            <p className="p-0 m-2 t-ls" style={{
                                                fontSize: "18px",
                                                fontWeight: "bold",
                                                color: "black"
                                            }}>{product.pris}</p>
                                            <Row>
                                                <Col className=" py-0 mt-0 ">
                                                    <Accordion className="w-75">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Heldagskurs  </Accordion.Header>
                                                            <Accordion.Body>
                                                                Heldagskurs – level 1 – 3,5h Pris:  1800:-
                                                                Lär dig grunderna kring kitesurfing och träna brädstarter. Följande moment går vi igenom under heldagskursen
                                                            </Accordion.Body>
                                                        </Accordion.Item>


                                                    </Accordion>
                                                </Col>
                                            </Row>
                                            <button className=" py-0 mt-5  my-3 btn-product justify-content-center">
                                                <p className="p-1 m-0">Boka</p>
                                            </button>
                                        </Col>

                                    </Row>
                            </Col>
                                <Col lg={6} xs={12} className="my-3">
                                    <Image src={product.img} className="image-fluid image-kurs my-3"/>
                                </Col>


                            </Row>
                        </Container>

                    )
                    }


                </div>
            )}

            <Col lg={6} sm={12}>

            </Col>


            <Footer/>


        </>

    );
}

export default Kurser;

