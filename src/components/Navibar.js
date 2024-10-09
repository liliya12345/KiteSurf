import React from 'react';
import {Container, Nav, Navbar,Image} from "react-bootstrap";
import surf from "../img/kite6.webp"


export default function Navibar(props) {
    return (
        <>
                <Navbar expand="lg" className="navbar-dark bg-black navi" >

                    <Container className="py-3">

                        <Navbar.Brand href="/" className="mr-de-havilan p-1 ">KiteSurf</Navbar.Brand>
                        <Image  src={surf} className="logo-nav d-none d-lg-block" />
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse className="justify-content-evenly nav-t">
                            <Nav>
                                <Nav.Link className="nav-a " href="/">Home</Nav.Link>
                                <Nav.Link className="nav-a" href="/shop">Shop</Nav.Link>
                                <Nav.Link className="nav-a" href="/course">Kurser</Nav.Link>
                                <Nav.Link className="nav-a" href="/contacts">Contacts</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>



        </>
    );
}

