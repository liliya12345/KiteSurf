import React, {useState} from 'react';
import {Col, Container, Dropdown, ListGroup, Row} from "react-bootstrap";
import {shop} from "./shop";
import ShopInfo from "./ShopInfo";
import Header from "./Header";
import Footer from "./Footer";
import Navibar from "./Navibar";
import NavibarShop from "./NavibarShop";

export default function ShopComponent(props) {
  const[itemSelected, setItemSelected]=useState()

  const handleItemSelected= (item)=>{
      setItemSelected(item);
    }

    return (
        <>
            <div className="bg-light">
                <Navibar className="bg-dark"/>
                <Container>

                    <Row>
                        <Col lg={3} md={12} sm={12} >
                            <Dropdown variant="none" className="d-inline-block">
                                <Dropdown.Toggle variant="none" id="dropdown-basic">
                                    <label className="moris text-items">Sortera efter</label>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"> Pris</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Stars</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Rekommenderas</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <ListGroup className="bg-light my-3">
                                <ListGroup.Item className="bg-light  text-items light-titel">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <ListGroup className="bg-light my-3">
                                <ListGroup.Item className="bg-light  text-items light-titel">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <ListGroup className="bg-light my-3">
                                <ListGroup.Item className="bg-light  text-items light-titel">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            <ListGroup className="bg-light my-3">
                                <ListGroup.Item className="bg-light  text-items light-titel">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item className="bg-light">Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col lg={9} md={12} sm={12}>
                            <Row>
                                <Col>
                                    <Container className=" ls-wrap">
                                        <Dropdown variant="none" className="d-inline-block">
                                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                                                <label className="moris text-items">Sortera efter</label>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1"> Pris</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Stars</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Rekommenderas</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Dropdown className="d-inline-block">
                                            <Dropdown.Toggle variant="none" id="dropdown-basic">
                                                <label className="moris text-items">Filtrera</label>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1"> Pris</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Stars</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Rekommenderas</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ul className=" justify-content-center nav d-flex">
                                        {shop.map(shop => <ShopInfo key={"title"} {...shop}/>)}
                                    </ul>
                                </Col>

                            </Row>

                        </Col>
                    </Row>

                </Container>
            </div>
                <Footer className="bg-black"/>



        </>
    );
}

