import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import kite6 from "../img/kite6.webp";

import MinCarousel from "./MinCarousel";
import Navibar from "./Navibar";
import Eye from "./Eye";


function Header(props) {
    return (<>

        <div className="position-relative p-0 my-0 mx-0 bg-white">
            <Navibar/>
            <MinCarousel/>
            <Eye/>
            <Container className="d-flex justify-content-center pb-5">
                <Row>
                    <Col xl={6} xs={12}>

                        <Row className=" justify-content-lg-end row-banner">
                            <Col lg={6} sm={12} className="justify-content-lg-end   row-banner">
                                <img src={kite6} alt="img" className="w-75 py-3"/>
                            </Col>
                            <Col lg={6} sm={12} className="justify-content-lg-start row-banner">
                               <h3 className="mr-de-haviland-regular py-3">Friheten på vattnet </h3>
                            </Col>
                            <Row>
                                <Col lg={12} sm={12} className="justify-content-start">
                                    <p className="moris">Du kommer att älska Kitesurfing </p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                    <Col xl={6} xs={12}>
                        <p className="py-5 ">Kitesurfing, what’s the catch? Att beskriva något så fantastiskt som kitesurfing
                            är faktiskt ganska svårt. Det är en speciell känsla som infinner sig i kroppen när man kitesurfar,
                            lite som när man är kär. Jobbet och vardagsstressen blir bokstavligt talat som bortblåst när man kommer
                            ner till stranden, riggar sin kite och gör sig redo att bli ett med två av Jordens element – vind och vatten.
                            Söker du efter en fet adrenalinkick, en härlig naturupplevelse eller kanske bara efter den varma gemenskapen
                            hos ”kitefamiljen” på stranden? Kitesurfing
                            är den ultimata hobbyn som ger dig allt detta ochväldigt mycket mer!</p>
                    </Col>
                </Row>
            </Container>

        </div>


    </>);
}

export default Header;