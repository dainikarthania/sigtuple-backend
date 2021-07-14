import React, { useState } from 'react';
import Slider from "react-slick";
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';


const Awards = () =>{
    const [currentIndex,setCurrentIndex]=useState(1)

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        afterChange: (current) =>{
            console.log(currentIndex,current)
            if(current==0){
                setCurrentIndex(1)
            }else{
                setCurrentIndex(current+3)
            }
            console.log(currentIndex,current)
            
        },
        nextArrow: <NextArrow ARROW_NEXT={currentIndex < 6 ? `assets/img/right-arrow-black.png` : 'assets/img/right_arrow.png'} ARROW_SIZE={currentIndex < 6 ? "20px" : "12px"}/>,
        prevArrow: <PrevArrow ARROW_PREW={currentIndex == 1 ? `assets/img/left_arrow.png` : `assets/img/left-arrow-black.png`} ARROW_SIZE={currentIndex==1 ? "12px":"20px"}/>};

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