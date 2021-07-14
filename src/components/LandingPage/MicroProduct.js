import React, { useState } from 'react';
import Slider from "react-slick";
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';

const MicroProduct = () => {
    const [currentIndex,setCurrentIndex]=useState(1)

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
        afterChange: (current) =>{
            console.log(currentIndex,current)
            if(current==0){
                setCurrentIndex(1)
            }else{
                setCurrentIndex(current+1)
            }
            console.log(currentIndex,current)
            
        },
        nextArrow: <NextArrow styleNext={ai_100_next} ARROW_NEXT={currentIndex < 3 ? `assets/img/right-arrow-black.png` : 'assets/img/right_arrow.png'} ARROW_SIZE={currentIndex < 3 ? "20px" : "12px"} />,
        prevArrow: <PrevArrow stylePrev={ai_100_prev} ARROW_PREW={currentIndex == 1 ? `assets/img/left_arrow.png` : `assets/img/left-arrow-black.png`} ARROW_SIZE={currentIndex==1 ? "12px":"20px"} />
    };

    return (
        <Slider {...setting_ai100}>
            <div className="hover-sec">
                <div className="relative_microscope">
                    <img src="assets/img/microscope.png" className="img-fluid mx-auto" />
                    <span className="microscope_text">
                        <img src="assets/img/AI100_small.png" style={{ height: "35px",width: "75px"}}/>
                    </span>
                </div>
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
            <div className="hover-sec">
                <div className="relative_microscope">
                    <img src="assets/img/microscope.png" className="img-fluid mx-auto" />
                    <span className="microscope_text">
                        <img src="assets/img/shonit.png" style={{ height: "55px",width: "90px"}}/>
                    </span>
                </div>
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
            <div className="hover-sec">
                <div className="relative_microscope">
                    <img src="assets/img/microscope.png" className="img-fluid mx-auto" />
                    <span className="microscope_text">
                    <img src="assets/img/urine.png" style={{ height: "50px",width: "83px"}}/>
                    </span>
                </div>
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
    )
}

export default MicroProduct;