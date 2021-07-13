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
        nextArrow: <NextArrow ARROW_NEXT={`assets/img/right_arrow.png`}/>,
        prevArrow: <PrevArrow ARROW_PREW={`assets/img/left_arrow.png`}/>};

    return (
        <div>
        <Slider {...settings2}>
        <div className="p-3 d-flex">
            <div className="w-200 mx-auto">
                <img src="assets/img/award-1.png" className="pb-2"/>
                <hr className="my-3"/>
                <p className="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p className="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
        <div className="p-3 d-flex">
            <div className="w-200 mx-auto">
                <img src="assets/img/award-2.png" className="pb-2"/>
                <hr className="my-3"/>
                <p className="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p className="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
        <div className="p-3 d-flex">
            <div className="w-200 mx-auto">
                <img src="assets/img/award-3.png" className="pb-2"/>
                <hr className="my-3"/>
                <p className="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p className="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
        <div className="p-3 d-flex">
            <div className="w-200 mx-auto">
                <img src="assets/img/award-1.png" className="pb-2"/>
                <hr className="my-3"/>
                <p className="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p className="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
        <div className="p-3 d-flex">
            <div className="w-200 mx-auto">
                <img src="assets/img/award-1.png" className="pb-2"/>
                <hr className="my-3"/>
                <p className="text-description mb-0 text-fwb fw-bold text-center">
                    Winner
                </p>
                <p className="text-description text-center mb-0">
                    AI healthcare Category
                </p>
            </div>
        </div>
    </Slider>
    </div>
    )
}
export default Awards;