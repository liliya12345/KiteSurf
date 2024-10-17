import React, {useState} from 'react';
import {Col, Container, Dropdown, ListGroup, Row} from "react-bootstrap";
import {shop} from "./shop";
import ShopInfo from "./ShopInfo";
import Footer from "./Footer";
import NavibarShop from "./NavibarShop";
import SideBar from "./SideBar";

export default function ShopComponent(props) {
    const [itemSelected, setItemSelected] = useState()

    const handleItemSelected = (item) => {
        setItemSelected(item);
    }

    return (
        <>
            <div className="bg-light">
                <NavibarShop/>
                <Container>
                    <Row>
                        <Col lg={3} md={1} xs={1}>
                            <div className="mt-3">
                                <SideBar />
                            </div>

                        </Col>
                        <Col lg={9} md={11} xs={11}>

                            <Row>
                                <Col lg={12}>
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

