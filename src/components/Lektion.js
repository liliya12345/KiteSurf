import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import Navibar from "./Navibar";

export default function Lektion(props) {
    return (
        <div className="bg-white w-100 m-0 p-0">
            <Container className="bg-white w-100 m-0 p-0">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Om oss</Nav.Link>
                                <Nav.Link href="#link">Kontakt</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Row>
                    <Col lg={6}>
                        <span>
                            <p style={{
                                fontSize:"105px",
                                marginTop:"40%",
                                marginLeft:"10%",
                                paddingLeft:"10%",
                                color:"black",
                                justifyContent:"end"
                            }}>En Stor Rubrik</p>
                        </span>
                        <p style={{
                            fontSize:"20px",
                            marginLeft:"10%",
                            paddingLeft:"10%",
                            paddingRight:"10%",
                            color:"black",
                            justifyContent:"center"
                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Col>
                    <Col lg={6}>
                        <div style={{
                            width:"200px",
                            height:"200px",
                            borderRadius:"50%",
                            marginTop:"55%",
                            backgroundColor:"#433878",
                            minHeight:"20%"
                        }}></div>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col lg={6} sm={12}>
                        <div style={{
                            position: "relative"
                        }}>
                            <div style={{
                                position:"absolute"
                            }}>
                                <p style={{
                                    fontSize: "450px",
                                    Top:"50%",
                                    color: "#b524ff",

                                }}> ,, </p>
                            </div>

                            <div style={{
                                backgroundColor: "#D96941",
                                marginTop: "20%"
                            }}>
                                <p style={{
                                    fontSize: "20px",
                                paddingLeft: "10%",
                                padding: "10%",
                                color: "white",
                                justifyContent: "center"
                            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry t of the
                                printing and typesetting industry t of the printing and typesetting industry t of the
                                printing and t t of the printing and typesetting industry t of the printing and
                                typesetting industryypesetting industry.</p>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

