import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import img1 from "../img/about.jpg"

function About(props) {
    return (
       <>
           <div className="m-0  w-100"
                style= {{
                    backgroundColor:"#212224"
                }}>
               <Container className="my-0  w-100"
                          >
                   <Row>
                       <Col lg={6} xs={12} className="my-5">
                           <h3 className="moris text-items my-5 "
                               style={{
                                   fontSize: "22px",
                                   fontWeight: "bold"
                               }}>SKÅNES BÄSTA KITESKOLA?</h3>
                           <p className="p-0 my-5 t-ls" style={{
                               fontSize: "16px"
                           }}>
                               Som elev hos Gusty får du den bästa tänkbara utbildning du kan få inom kitesurfing. För att Du ska få ut så mycket av möjligt av din kitesurfing kurs tar vi aldrig mer än två elever per instruktör.

                               Gusty är certifierad IKO instruktör. Detta innebär att Du som elev instrueras i enlighet med IKO’s riktlinjer som är framtagna för att man ska lära sig kitesurfa enkelt och säkert. Vid en lektion hos Gusty får Du därför stegvis lära dig behärska de fundamentala teknikerna under säkra former så att du snabbt kommer igång att kitesurfa på egen hand.</p>


                       </Col>
                       <Col lg={6} xs={12} className="my-3">
                           <Image src={img1} className="image-fluid image-kurs my-5"/>
                       </Col>


                   </Row>
               </Container>
           </div>




       </>
    );
}

export default About;