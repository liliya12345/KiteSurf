import React from 'react';
import {Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import img6 from '../img/img_10.png'
import img7 from '../img/img_11.png'
import img9 from '../img/img_12.png'
import Animation from "./Animation";

function Footer(props) {
    return (
        <>
            <div className="w-100 position-relative" style= {{
                backgroundColor:"#212224"
            }}>
                <Animation/>
                <Container className="w-100 footer-content">
                    <Row className="w-100 text-black">
                        <Col lg={6} sm={6}>
                            <div className=" justify-content-center my-3">
                                <h6 className="text-center"> Adress</h6>
                                <h6 className="text-center text-black "> Vejbystrand Arons väg 25</h6>
                            </div>
                        </Col>
                        <Col lg={6} sm={6}>
                            <h6 className="my-3 text-center">Folja oss i sociala medier </h6>
                            <Row className="m-0 p-0 justify-content-center">
                                <Col xs={1} lg={1}>
                                    <Image src={img9} alt="img" roundedCircle className="img-footer" />
                                </Col>

                                <Col xs={1} lg={1}>
                                    <Image src={img6} alt="img" roundedCircle className="img-footer" />
                                </Col>
                                <Col xs={1} lg={1}>
                                    <Image src={img7} alt="img" roundedCircle className="img-footer" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default Footer;