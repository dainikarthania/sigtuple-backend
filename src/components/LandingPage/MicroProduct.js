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
        nextArrow: <NextArrow styleNext={ai_100_next} ARROW_NEXT={`assets/img/right_arrow.png`}/>,
        prevArrow: <PrevArrow stylePrev={ai_100_prev} ARROW_PREW={`assets/img/left_arrow.png`}/>
    };

    return (
        <div className="hover-sec">
              <Slider {...setting_ai100}>
                <div>
                        <img src="assets/img/microscope.png" className="img-fluid mx-auto"/>
                        <div class="main-hover row m-0 g-0">
                                <div class="text-img">
                                    <img src="assets/img/circle-dot.png" />
                                    <div class="text-hover col">
                                        <p class="text-description mt-auto ps-3">Neutrophil <span>2</span></p>
                                        <p class="text-description mt-auto ps-3">Lymphocyte</p>
                                        <p class="text-description mt-auto ps-3">Monocyte<span>1</span></p>
                                        <p class="text-description mt-auto ps-3">Neutrophil</p>
                                        <p class="text-description mt-auto ps-3">Lymphocyte</p>
                                        <p class="text-description mt-auto ps-3">Monocyte</p>
                                    </div>
                                </div>
                                <div class="col-12 d-flex classified border-top">
                                    <p class="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger">Unclassified
                                        <span>1</span>
                                    </p>
                                    <p class="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger ms-auto">
                                        Rejected <span>7</span></p>
                                </div>
                            </div>
                                </div>
                <div>
                        <img src="assets/img/microscope.png" className="img-fluid mx-auto"/>
                        <div class="main-hover row m-0 g-0">
                                <div class="text-img">
                                    <img src="assets/img/circle-dot.png" />
                                    <div class="text-hover col">
                                        <p class="text-description mt-auto ps-3">Neutrophil <span>2</span></p>
                                        <p class="text-description mt-auto ps-3">Lymphocyte</p>
                                        <p class="text-description mt-auto ps-3">Monocyte<span>1</span></p>
                                        <p class="text-description mt-auto ps-3">Neutrophil</p>
                                        <p class="text-description mt-auto ps-3">Lymphocyte</p>
                                        <p class="text-description mt-auto ps-3">Monocyte</p>
                                    </div>
                                </div>
                                <div class="col-12 d-flex classified border-top">
                                    <p class="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger">Unclassified
                                        <span>1</span>
                                    </p>
                                    <p class="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger ms-auto">
                                        Rejected <span>7</span></p>
                                </div>
                            </div>
                                </div>
                <div>
                        <img src="assets/img/microscope.png" className="img-fluid mx-auto"/>
                        <div class="main-hover row m-0 g-0">
                                <div class="text-img">
                                    <img src="assets/img/circle-dot.png" />
                                    <div class="text-hover col">
                                        <p class="text-description mt-auto ps-3">Neutrophil <span>2</span></p>
                                        <p class="text-description mt-auto ps-3">Lymphocyte</p>
                                        <p class="text-description mt-auto ps-3">Monocyte<span>1</span></p>
                                        <p class="text-description mt-auto ps-3">Neutrophil</p>
                                        <p class="text-description mt-auto ps-3">Lymphocyte</p>
                                        <p class="text-description mt-auto ps-3">Monocyte</p>
                                    </div>
                                </div>
                                <div class="col-12 d-flex classified border-top">
                                    <p class="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger">Unclassified
                                        <span>1</span>
                                    </p>
                                    <p class="text-description mb-0 ps-3 bg-light px-2 py-1 text-danger ms-auto">
                                        Rejected <span>7</span></p>
                                </div>
                            </div>
                                </div>
                    
            </Slider>
        </div>
    )
}

export default MicroProduct;