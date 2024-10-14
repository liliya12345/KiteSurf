import React, {useState} from 'react';
import {Alert, Button, Col, Container, Dropdown, Form, InputGroup, Row, Section} from "react-bootstrap";
import NavibarShop from "./NavibarShop";
import Footer from "./Footer";
import {motion, stagger} from "framer-motion"


function Contacts() {
    const [validated, setValidated] = useState(false);
    const [city, setCity] = useState("");
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

    };
    const handleCity = (event) => {
        setCity(event.target.value);
    }

    const [show, setShow] = useState(false);
    const handelAlert = () => {
        validated === true && setShow(true);

    }
    const handleClose = () => {
        setShow(false);
    }
    const contactsAnimation = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.3}

        })
    }
    const contactsAnimationRight = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.3}

        })
    }


    return (
        <>
            <div className="bg-light">
                <NavibarShop/>
                <Container className="bg-light my-5 py-5">
                    <motion.Section initial="hidden" whileInView="visible">
                        <Row className="bg-light">
                            <Col lg={4} md={4} sm={4} xs={12}>
                                <motion.h3 custom={1} variants={contactsAnimation} className="moris text-items "
                                           style={{
                                               fontSize: "22px",
                                               fontWeight: "bold"
                                           }}>Get in touch!
                                </motion.h3>
                                <motion.p custom={2} variants={contactsAnimation} className="p-0 m-2 t-ls" style={{
                                    fontSize: "16px"
                                }}>Boka sin kurs redan nu!
                                </motion.p>
                            </Col>
                            <Col lg={8} md={8} sm={4} xs={12}>
                                <motion.div initial="hidden" whileInView="visible" >
                                    <motion.form custom={3} variants={contactsAnimationRight} noValidate validated={validated} onSubmit={handleSubmit} className="">
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="8" controlId="validationCustom01">
                                                <Form.Label>Ditt namn</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    placeholder=""
                                                    defaultValue=""
                                                />
                                                <Form.Control.Feedback>Wow ett fint namn!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">aja baja! Har du glömd ditt
                                                    namn?</Form.Control.Feedback>


                                            </Form.Group>
                                            <Form.Group as={Col} md="8" controlId="validationCustom02">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="email"
                                                    placeholder=""
                                                    defaultValue=""
                                                />
                                                <Form.Control.Feedback>Vad duktig du är!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">aja baja! Har du glömd ditt
                                                    email?</Form.Control.Feedback>

                                            </Form.Group>
                                            <Form.Group as={Col} md="8" controlId="validationCustomUsername">
                                                <Form.Label>Ditt telefonnummer</Form.Label>
                                                <InputGroup hasValidation>
                                                    <InputGroup.Text id="inputGroupPrepend">+46</InputGroup.Text>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder=""
                                                        aria-describedby="inputGroupPrepend"
                                                        required
                                                    />
                                                    <Form.Control.Feedback type="invalid">Vad är ditt
                                                        telefonnummer?</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">aja baja! Har du glömd ditt
                                                        telefonnummer?</Form.Control.Feedback>

                                                </InputGroup>
                                            </Form.Group>
                                        </Row>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="8" controlId="validationCustom03">
                                                <Form.Select aria-label="Default select example" value={city}
                                                             onChange={handleCity}>
                                                    <option>Stad</option>
                                                    <option value="Helsingborg">Helsingborg</option>
                                                    <option value="Landskrona">Landskrona</option>
                                                    <option value="Ängelholm">Ängelholm</option>
                                                </Form.Select>
                                                <Form.Control.Feedback type="invalid">Vilken stad?</Form.Control.Feedback>
                                                {/*<Form.Control.Feedback>Bra vågar i {city}!</Form.Control.Feedback>*/}
                                            </Form.Group>
                                            <Form.Group as={Col} md="8" controlId="validationCustom04" className="py-3">
                                                <Form.Select aria-label="Default select example">
                                                    <option>Kurs</option>
                                                    <option value="Helsingborg">KiteSurf,Heldagskurs</option>
                                                    <option value="Helsingborg">KiteSurf,Tvådagarskurs</option>
                                                    <option value="Landskrona">Surfing, Helgadskurs</option>
                                                    <option value="Ängelholm">Wingfoiling</option>
                                                </Form.Select>
                                                <Form.Control.Feedback type="invalid">Vilken kurs?</Form.Control.Feedback>
                                                {/*<Form.Control.Feedback>Bra vågar i {city}!</Form.Control.Feedback>*/}
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

                                        <Button type="submit" onClick={handelAlert}>Boka</Button>
                                        <Alert show={show} Color="dark" variant="success" onClose={() => setShow(false)}
                                               dismissible>
                                            <Alert.Heading>Vi ses snart i {city}!</Alert.Heading>
                                        </Alert>

                                    </motion.form>
                                </motion.div>

                            </Col>
                        </Row>
                    </motion.Section>


                </Container>

            </div>
            <Footer/>
        </>
    );
}

export default Contacts;
