import React from 'react';
import Slider from "react-slick";

import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';

const Client = () => {
    let client_next = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // padding: "14px",

        position: "absolute",
        width: "35px",
        height: "35px",
        border: "3px solid #FFFFFF",
        boxSizing: "border-box",
        borderRadius: "41px",
        left: 'calc(100% - 90px)',
        top: "255px",
        zIndex:20
    }
    let client_prev = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // padding: "14px",

        position: "absolute",
        width: "35px",
        height: "35px",

        border: "3px solid #FFFFFF",
        boxSizing: "border-box",
        borderRadius: "41px",
        left: 'calc(100% - 130px)',
        top: "255px",
        zIndex:20
    }
    const settings_clinet = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow clientNext={client_next}/>,
        prevArrow: <PrevArrow clientPrev={client_prev}/>
    };


    return (
        <div className="client-arrows">
           <Slider {...settings_clinet}>
                                <div class="d-flex mx-0 px-2 pb-2">
                                    <div class="col-6 client-say d-flex flex-column">
                                        <div class="my-auto">
                                            <p class="text-description fw-bold">
                                                “High accuracy for WBC DC including Eosinophil and IG classification.
                                                                                                                                        Utilization of tele-reporting for
                                                                                                                                        peripheral smear interpretation and
                                                                                         platelet clump analysis.”
                                            </p>
                                            <div class="d-flex name mt-4">
                                                <img src="assets/img/Dr-Prathima-K-MPathology.png" class="me-3"/>
                                                <div>
                                                    <h3 class="text-sub fw-bold mb-1">
                                                        Dr. Prathima K M
                                                    </h3>
                                                    <p>
                                                        MD (Pathology),
                                                    </p>
                                                    <p>
                                                        Lab Director- Vikram Hospital
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 company-say d-flex flex-column"
                                        style={
                                            {backgroundColor: "red"}
                                    }>
                                        <div class="m-auto w-50">
                                            <h1 class="text-title text-white fw-bold">
                                                Good use of remote access
                                            </h1>
                                            <p class="text-description text-white">
                                                for reporting post working hours and weekends.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex mx-0 px-2 pb-2 ">
                                    <div class="col-6 client-say d-flex flex-column">
                                        <div class="my-auto">
                                            <p class="text-description fw-bold">
                                                “High accuracy for WBC DC including Eosinophil and IG classification.
                                                                                                                                        Utilization of tele-reporting for
                                                                                                                                        peripheral smear interpretation and
                                                                                                                                        platelet clump analysis.”
                                            </p>
                                            <div class="d-flex name mt-4">
                                                <img src="assets/img/Dr-Prathima-K-MPathology.png" class="me-3"/>
                                                <div>
                                                    <h3 class="text-sub fw-bold mb-1">
                                                        Dr. Prathima K M
                                                    </h3>
                                                    <p>
                                                        MD (Pathology),
                                                    </p>
                                                    <p>
                                                        Lab Director- Vikram Hospital
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6 company-say d-flex flex-column"
                                        style={
                                            {backgroundColor: "red"}
                                    }>
                                        <div class="m-auto w-50">
                                            <h1 class="text-title text-white fw-bold">
                                                Good use of remote access
                                            </h1>
                                            <p class="text-description text-white">
                                                for reporting post working hours and weekends.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
        </div>
    )
}

export default Client;