import React, {useState} from 'react';
import FsLightbox from "fslightbox-react";
import {Col, Container, Image, Row, Section} from "react-bootstrap";
import {imagegalary} from "./imagegalary";
import {motion, stagger} from "framer-motion"


function ImgSlider(props) {
    const [toggler, setToggler] = useState(false);
    const imgAnimation = {
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
    return (<>

            <motion.div  initial="hidden" whileInView="visible" className="col-md-6 col-lg-4 col-xl-3 h-25">
                <div className="rounded position-relative h-25">
                    <motion.img custom={1} variants={imgAnimation} src={props.img}
                         className=" w-100 img-fluid img-galary " alt={"image"}/>
                </div>
            </motion.div>


        {/*<button onClick={() => setToggler(!toggler)}>*/}
        {/*    Toggle Lightbox*/}
        {/*</button>*/}
        {/*<FsLightbox*/}
        {/*    toggler={toggler}*/}
        {/*    sources={[*/}
        {/*        <img src={props.img} alt="Lights" />*/}
        {/*    ]}*/}
        {/*/>*/}
    </>);
}

export default ImgSlider;