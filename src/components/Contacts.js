import React, {useState} from 'react';
import {Alert, Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import NavibarShop from "./NavibarShop";
import Footer from "./Footer";

function Contacts() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

    };
    const[show,setShow]=useState(false);
    const handelAlert=()=>{
         setShow(true);
    }

    return (
        <>
            <div className="bg-light">
                <NavibarShop/>
                <Container className="bg-light my-5 py-5">
                    <Row className="bg-light">
                        <Col lg={4} md={6} sm={12}>
                            <h3 className="moris text-items "
                                style={{
                                    fontSize: "22px",
                                    fontWeight: "bold"
                                }}>Get in touch!</h3>
                            <p className="p-0 m-2 t-ls" style={{
                                fontSize: "16px"
                            }}>Skicka sin fråga till oss</p>
                        </Col>
                        <Col lg={8} md={6} sm={12}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            defaultValue="Mark"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                            defaultValue="Otto"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                        <Form.Label>Username</Form.Label>
                                        <InputGroup hasValidation>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please choose a username.
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" placeholder="City" required/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid city.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control type="text" placeholder="State" required/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control type="text" placeholder="Zip" required/>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid zip.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before submitting."
                                        feedbackType="invalid"
                                    />
                                </Form.Group>
                                <Button type="submit" onClick={handelAlert}>Submit form</Button>

                                <Alert  show={show} variant="danger"  onClose={() => setShow(false)} dismissible>
                                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                    <p>
                                        Change this and that and try again. Duis mollis, est non commodo
                                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                                        Cras mattis consectetur purus sit amet fermentum.
                                    </p>
                                </Alert>
                            </Form>
                        </Col>
                    </Row>

                </Container>

            </div>
            <Footer/>











        </>
    );
}

export default Contacts;
