import React from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import korg from '../img/korg.svg'

function NavibarShop(props) {
    return (
        <>
            <Navbar expand="sm" className="bg-body-secondary navi2"  >

                <Container className="py-3 ">
                    <Navbar.Brand href="/" className="mr-de-havilan">Gardenia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-end nav-t ">
                        <Nav className="mx-0">
                            <Nav.Link className="nav-a" href="/">Home</Nav.Link>
                            <Nav.Link className="nav-a" href="/shop">Shop</Nav.Link>
                            <Nav.Link className="nav-a" href="/contacts">Contacts</Nav.Link>
                            <img className="link-korg nav-a" src={korg}/>



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>
    );
}

export default NavibarShop;