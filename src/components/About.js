import React from 'react';
import {Col, Container, Image, Row, Section} from "react-bootstrap";
import img1 from "../img/about.jpg"
import {motion, stagger} from "framer-motion"

function About(props) {

        const aboutAnimation = {
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
        const aboutAnimationRight = {
            hidden: {
                x: -10,
                opacity: 0,
            },
            visible: custom => ({
                x: 0,
                opacity: 1,
                transition: {delay: custom * 0.3},
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],

            })
        }

    return (
       <>
           <div className="m-0  w-100"
                style= {{
                    backgroundColor:"#212224"
                }}>
               <motion.Section  initial="hidden" whileInView="visible">
                   <Container className="my-0  w-100">
                       <Row>
                           <Col lg={6} xs={12} className="my-5">
                               <motion.h3  custom={1} variants={aboutAnimation} className="moris text-items text-white my-5 "
                                   style={{
                                       fontSize: "22px",
                                       fontWeight: "bold"
                                   }}>SKÅNES BÄSTA KITESKOLA?</motion.h3>
                               <motion.p  custom={2} variants={aboutAnimation} className="p-0 my-5 t-ls text-white" style={{
                                   fontSize: "16px"
                               }}>
                                   Som elev hos Gusty får du den bästa tänkbara utbildning du kan få inom kitesurfing. För att Du ska få ut så mycket av möjligt av din kitesurfing kurs tar vi aldrig mer än två elever per instruktör.

                                   Gusty är certifierad IKO instruktör. Detta innebär att Du som elev instrueras i enlighet med IKO’s riktlinjer som är framtagna för att man ska lära sig kitesurfa enkelt och säkert. Vid en lektion hos Gusty får Du därför stegvis lära dig behärska de fundamentala teknikerna under säkra former så att du snabbt kommer igång att kitesurfa på egen hand.</motion.p>


                           </Col>
                           <Col lg={6} xs={12} className="my-3">
                               <motion.img custom={3} variants={aboutAnimationRight} src={img1} className="image-fluid image-kurs my-5"/>
                           </Col>


                       </Row>
                   </Container>
               </motion.Section>

           </div>




       </>
    );
}

export default About;