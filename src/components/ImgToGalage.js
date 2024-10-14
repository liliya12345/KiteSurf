import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ImgSlider from "./ImgSlider";
import {imagegalary} from "./imagegalary";


function ImgToGalage(props) {


    return (
        <>


            <div className="tab-content py-5 " style= {{
                backgroundColor:"#212224"
            }}>
                <div id="tab-1" className="tab-pane fade show p-0 active p-5 ">
                    <div className="row g-4 py-5">
                        <div className="col-lg-12">
                            <div className="row g-3 ">
                                {imagegalary.map(img => <ImgSlider key={"img"} {...img}/>)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImgToGalage;