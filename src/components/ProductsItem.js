import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ShopItemInfo from "./ShopItemInfo";
import * as item from "react-bootstrap/ElementChildren";

function ProductsItem(itemShop,props) {
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <ShopItemInfo itemShop={{itemShop}} />
                </Col>
                <Col>

                </Col>
            </Row>
        </Container>










        </>
    );
}

export default ProductsItem;