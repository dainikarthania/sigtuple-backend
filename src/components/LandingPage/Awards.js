import React from 'react';
import Slider from "react-slick";
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';


const Awards = () =>{

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>};

    return (
        <div>
        <Slider {...settings2}>
        <div class="p-3 d-flex">
            <div class="w-200 mx-auto">
                <img src="assets/img/award-1.png" class="pb-2"/>
                <hr class="my-3"/>
                <p class="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p class="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
        <div class="p-3 d-flex">
            <div class="w-200 mx-auto">
                <img src="assets/img/award-2.png" class="pb-2"/>
                <hr class="my-3"/>
                <p class="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p class="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
        <div class="p-3 d-flex">
            <div class="w-200 mx-auto">
                <img src="assets/img/award-3.png" class="pb-2"/>
                <hr class="my-3"/>
                <p class="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p class="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
        <div class="p-3 d-flex">
            <div class="w-200 mx-auto">
                <img src="assets/img/award-1.png" class="pb-2"/>
                <hr class="my-3"/>
                <p class="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p class="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
        <div class="p-3 d-flex">
            <div class="w-200 mx-auto">
                <img src="assets/img/award-1.png" class="pb-2"/>
                <hr class="my-3"/>
                <p class="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p class="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
    </Slider>
    </div>
    )
}
export default Awards;