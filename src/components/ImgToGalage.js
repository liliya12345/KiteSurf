import React, {useState} from 'react';
import {data} from "./data";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {Captions, Fullscreen, Thumbnails, Zoom} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";


function ImgToGalage(props) {
    const [toggler, setToggler] = useState(false);


    return (
        <>


            <Lightbox
                plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
                open={toggler}
                close={() => setToggler(false)}
                slides={data}
            />


            <div className="tab-content py-5 ">
                <div id="tab-1" className="tab-pane fade show p-0 active p-5 ">
                    <div className="row g-4 py-5">
                        <div className="col-lg-12">
                            <div className="row g-3 ">
                                {data.map(img =>

                                    <img scr={img.src} key={img.id} onClick={() =>
                                    {console.log(img.id);
                                        let startImage=data[0];
                                        data[0]=data[img.id-1];
                                        data[img.id-1]=startImage;
                                        setToggler(true)}
                                    }{...img} className="col-md-6 col-lg-4 col-xl-3  img-fluid "/>

                                )}


                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
}

export default ImgToGalage;