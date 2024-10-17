import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import kite6 from "../img/kite6.webp";

import MinCarousel from "./MinCarousel";
import Navibar from "./Navibar";
import Eye from "./Eye";
import {motion, stagger} from "framer-motion"


export default function Header(props) {

   const [theme,setTheme]=useState('light') ;


   const handleChangeStyle = ()=>{
     setTheme(theme ==='light'?'dark':'light')}
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme])

        const headerAnimation = {
            hidden: {
                x: -100,
                opacity: 0,
            },
            visible: custom => ({
                x: 0,
                opacity: 1,
                transition: {delay: custom * 0.5}

            })
        }
    const headerAnimationRight = {
        hidden: {
            x:-100,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.5}

        })
    }
        return (<>

            <div className="position-relative p-0 my-0 mx-0 bg-white">
                <Navibar/>
                <MinCarousel/>
                <Button className="eye-btn" onClick={handleChangeStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512"
                         className="icon-eye ">
                        <path
                            d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                    </svg>
                    <h6 className="p-eye p-0 justify-content-center d-none d-lg-block">Anpassa</h6>


                </Button>
                <Container className="d-flex justify-content-center pb-5">
                    <motion.div initial="hidden" whileInView="visible">
                        <Row>
                            <Col xl={6} xs={12}>
                                <Row className=" justify-content-lg-end row-banner">
                                    <Col lg={6} sm={12} className="justify-content-lg-end  row-banner">
                                        <motion.img custom={1} variants={headerAnimation} src={kite6} alt="img" className="w-75 py-3"/>
                                    </Col>
                                    <Col lg={6} sm={12} className="justify-content-lg-start row-banner">
                                        <motion.h3 custom={2} variants={headerAnimation} className="mr-de-haviland-regular py-3" id="cha">Friheten på vattnet </motion.h3>
                                    </Col>
                                    <Row>
                                        <Col lg={12} sm={12} className="justify-content-start">
                                            <motion.p  custom={3}  variants={headerAnimation} className="moris">Du kommer att älska Kitesurfing </motion.p>
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                            <Col xl={6} xs={12}>
                                <motion.p  custom={4} variants={headerAnimationRight} className="py-5 ">Kitesurfing, what’s the catch? Att beskriva något så fantastiskt
                                    som
                                    kitesurfing
                                    är faktiskt ganska svårt. Det är en speciell känsla som infinner sig i kroppen när
                                    man
                                    kitesurfar,
                                    lite som när man är kär. Jobbet och vardagsstressen blir bokstavligt talat som
                                    bortblåst
                                    när
                                    man kommer
                                    ner till stranden, riggar sin kite och gör sig redo att bli ett med två av Jordens
                                    element –
                                    vind och vatten.
                                    Söker du efter en fet adrenalinkick, en härlig naturupplevelse eller kanske bara
                                    efter
                                    den
                                    varma gemenskapen
                                    hos ”kitefamiljen” på stranden? Kitesurfing
                                    är den ultimata hobbyn som ger dig allt detta ochväldigt mycket mer!</motion.p>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>

            </div>


        </>
    );

    }
