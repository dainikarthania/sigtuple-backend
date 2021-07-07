import React from 'react';
import Slider from "react-slick";
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';

const MicroProduct = () => {
    let ai_100_next = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "14px",

        position: "absolute",
        width: "35px",
        height: "35px",

        opacity: "0.6",
        border: "2px solid #707070",
        boxSizing: "border-box",
        borderRadius: "41px",
        top: "-21px",
        left: "481px"
    }
    let ai_100_prev = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "14px",

        position: "absolute",
        width: "35px",
        height: "35px",

        opacity: "0.6",
        border: "2px solid #707070",
        boxSizing: "border-box",
        borderRadius: "41px",
        top: "-21px",
        left: "341px"
    }

    const setting_ai100 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow styleNext={ai_100_next}/>,
        prevArrow: <PrevArrow stylePrev={ai_100_prev}/>
    };

    return (
        <div>
              <Slider {...setting_ai100}>
                                <div>
                                    <img src="assets/img/microscope.png" class="img-fluid mx-auto"/>
                                </div>
                                <div>
                                    <img src="assets/img/microscope.png" class="img-fluid mx-auto"/>
                                </div>
                                <div>
                                    <img src="assets/img/microscope.png" class="img-fluid mx-auto"/>
                                </div>
            </Slider>
        </div>
    )
}

export default MicroProduct;