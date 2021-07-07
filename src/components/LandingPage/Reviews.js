import React from 'react';
import Slider from "react-slick";
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';


const Reviews = () =>{

    let nextArrow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color:"black",
        width:"66px",
        height:"66px",
        position: "absolute",

        opacity: "0.5",
        border: "3px solid rgb(112, 112, 112)",
        boxSizing: "border-box",
        borderRadius: "41px",
        left:"970px"
    }

    let prevArrow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        color:"black",
        width:"66px",
        height:"66px",
        position: "absolute",

        opacity: "0.5",
        border: "3px solid rgb(112, 112, 112)",
        boxSizing: "border-box",
        borderRadius: "41px",
        left:"-70px"
    }

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow reviewNext={nextArrow}/>,
        prevArrow: <PrevArrow reviewPrev={prevArrow}/>};

    return (
    <Slider {...settings2}>
        <div class="p-3">
            <div class="cards">
                <div class="d-flex">
                    <span class="text-danger text-fwb fw-bold">CVMI 2019</span>
                    <span class="text-70 ms-auto text-fwb">2019</span>
                </div>
                <p class="text-description mt-4">
                    Automated focus distance estimation for digital microscopy using deep convolutional neural
                                                                                    networks
                </p>
                <span class="text-70 d-flex mt-auto">
                    <img src="assets/img/bookmark.png" class="d-inline me-2 my-auto"/>Presentation
                </span>
            </div>
        </div>
        <div class="p-3">
            <div class="cards">
                <div class="d-flex">
                    <span class="text-danger text-fwb fw-bold">AAO manuscript</span>
                    <span class="text-70 ms-auto text-fwb">2019</span>
                </div>
                <p class="text-description mt-4">
                    Comparison of Deep Learning System classifier results to specialist grading for Referable
                                                                                    Diabetic Retinopathy (RDR) in
                                                                                    fundus images
                </p>
                <span class="text-70 d-flex mt-auto">
                    <img src="assets/img/bookmark.png" class="d-inline me-2 my-auto"/>Journal publication
                </span>
            </div>
        </div>
        <div class="p-3">
            <div class="cards">
                <div class="d-flex">
                    <span class="text-danger text-fwb fw-bold">APTOS 2019</span>
                    <span class="text-70 ms-auto text-fwb">2019</span>
                </div>
                <p class="text-description mt-4">
                    Validation of results of OCT Macula categorisation by Artificial Intelligence (AI) algorithm
                                                                                    compared to specialist
                                                                                    labelling
                </p>
                <span class="text-70 d-flex mt-auto">
                    <img src="assets/img/bookmark.png" class="d-inline me-2 my-auto"/>Abstract Publication
                </span>
            </div>
        </div>
        <div class="p-3">
            <div class="cards">
                <div class="d-flex">
                    <span class="text-danger text-fwb fw-bold">CVMI 2019</span>
                    <span class="text-70 ms-auto text-fwb">2019</span>
                </div>
                <p class="text-description mt-4">
                    Automated focus distance estimation for digital microscopy using deep convolutional neural
                                                                                    networks
                </p>
                <span class="text-70 d-flex mt-auto">
                    <img src="assets/img/bookmark.png" class="d-inline me-2 my-auto"/>Presentation
                </span>
            </div>
        </div>
    </Slider>
    )
}

export default Reviews;