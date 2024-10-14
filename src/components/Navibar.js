import React from 'react';
import {Container, Nav, Navbar,Image} from "react-bootstrap";
import surf from "../img/kite6.webp"
import { motion } from "framer-motion"


export default function Navibar(props) {





    return (
        <>
            <Navbar expand="lg" className="navbar-dark w-100  navi"  style={{
                backgroundColor:"rgba(168, 166, 166, 0.5)"
            }}>

                <Container className="py-3">

                    <Navbar.Brand href="/" className="mr-de-havilan p-1  navbar-brands">KiteSurf</Navbar.Brand>
                    <Nav.Link className="nav-a " href="/"><Image  src={surf} className="logo-nav d-none d-lg-block min-vw-7" /></Nav.Link>
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

