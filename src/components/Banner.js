import React from 'react';
import {Button, Col, Container, Row, Section} from "react-bootstrap";
import logo from "../img/bnr1.webp"
import logo1 from "../img/ban1.jpeg"
import logo2 from "../img/ban2.webp"
import {motion, stagger} from "framer-motion"

export default function Banner(props) {
    const bannerAnimation = {
        hidden: {
            x: -100, opacity: 0,
        }, visible: custom => ({
            x: 0, opacity: 1, transition: {delay: custom * 0.3}

        })
    }
    const bannerAnimationImg = {
        hidden: {
            x: 100, opacity: 0,
        }, visible: custom => ({
            x: 0, opacity: 1, transition: {delay: custom * 0.3}

        })
    }


    return (<>
            <div className="d-flex align-items-center justify-content-center text-center banner-bg p-0 my-3 mx-0">
                <motion.Section initial="hidden" whileInView="visible">
                    <Row>
                        <Row className="my-3">
                            <Col>
                                <motion.h1 custom={1} variants={bannerAnimation}
                                           className="my-5 text-center ">Vi erbjuder
                                </motion.h1>
                            </Col>
                        </Row>


                        <Col lg={4} md={12} sm={12} className="p-5 position-relative">
                            <motion.div initial="hidden" whileInView="visible">
                                <motion.div custom={2} variants={bannerAnimationImg}>
                                    <img custom={2} className="img-banner " src={logo}
                                         alt="img1"/>
                                    <span>
                                   <h3 className="moris ">KifeSurf</h3>
                                   </span>
                                    <span>
                            <Button
                                className="py-2 mt-5  btn btn-product justify-content-center position-absolute">
                                <p className="p-0 m-0 ">Läs mer</p>
                            </Button>¬
                             </span>
                                </motion.div>

                            </motion.div>

                        </Col>


                        <Col lg={4} md={12} sm={12} className="p-5 position-relative">
                            <motion.div initial="hidden" whileInView="visible">
                                <motion.div custom={2} variants={bannerAnimationImg}>
                                    <img className="img-banner" src={logo1}
                                         alt="img1"/>
                                    <span>
                         <h3 className="moris">Wingfoiling</h3>
¬
                            </span>
                                    <span>
                        <Button className="py-2 mt-5  btn btn-product justify-content-center position-absolute">
                                <p className="p-0 m-0 ">Läs mer</p>
                            </Button> </span>
                                </motion.div>
                            </motion.div>
                        </Col>


                        <Col lg={4} md={12} sm={12} className="p-5 position-relative">
                            <motion.div initial="hidden" whileInView="visible">
                                <motion.div custom={2} variants={bannerAnimationImg}>
                                    <img className="img-banner" src={logo2} alt="img1"/>
                                    <span>
                          <h3 className="moris ">Surfing</h3>
                         </span>
                                    {/*<span> <button className=" py-0 mt-5 btn-product justify-content-center position-absolute">*/}
                                    {/*    <a className="btn" href="/contacts"><p className="p-0 m-0">Läs mer</p> </a>*/}
                                    {/*</button> </span>*/}

                                    <span>
                            <Button className="py-2 mt-5  btn btn-product justify-content-center position-absolute">
                                <p className="p-0 m-0 ">Läs mer</p>
                            </Button>
                        </span>
                                </motion.div>
                            </motion.div>
                        </Col>
                    </Row>
                </motion.Section>


            </div>


        </>);
}

