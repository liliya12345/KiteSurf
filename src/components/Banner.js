import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo from "../img/bnr1.webp"
import logo1 from "../img/ban1.jpeg"
import logo2 from "../img/ban2.webp"

export default function Banner(props) {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center text-center banner-bg p-0 my-3 mx-0">


                <Row>
                    <Row className="my-3">
                        <Col>
                            <h1 className="my-5 text-center ">Vi erbjuder</h1>
                        </Col>
                    </Row>
                    <Col lg={4} md={4} sm={12} className="p-5 position-relative">
                        <img className="img-banner " src={logo} alt="img1"/>
                        <span>
                          <h3 className="moris ">KifeSurf</h3>
                    </span>
                        <span>
                        <button className=" py-0 mt-5 btn-product justify-content-center position-absolute">
                            <p className="p-1 m-0">Läs mer</p>
                        </button>
                             </span>

                    </Col>
                    <Col lg={4} md={4} sm={12} className="p-5 position-relative">
                        <img className="img-banner" src={logo1} alt="img1"/>
                        <span>
                         <h3 className="moris">Wingfoiling</h3>

                    </span><span>
                        <button className=" py-0 mt-5 btn-product justify-content-center position-absolute">
                            <p className="p-1 m-0">Läs mer</p>
                        </button> </span>
                    </Col>
                    <Col lg={4} md={4} sm={12} className="p-5 position-relative">
                        <img className="img-banner" src={logo2} alt="img1"/>
                        <span>
                          <h3 className="moris ">Surfing</h3>
                         </span><span>
                        <button className=" py-0 mt-5 btn-product justify-content-center position-absolute">
                            <p className="p-1 m-0">Läs mer</p>
                        </button> </span>
                    </Col>
                </Row>
            </div>


        </>
    );
}

