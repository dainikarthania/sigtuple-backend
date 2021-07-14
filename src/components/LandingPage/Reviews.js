import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';
import Api from '../../Api';


const Reviews = () =>{
    const [publication,setPublication] = useState([])
    const [currentIndex,setCurrentIndex]=useState(1)

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
        afterChange: (current) =>{
            console.log(currentIndex,current)
            if(current==0){
                setCurrentIndex(1)
            }else{
                setCurrentIndex(current+3)
            }
            console.log(currentIndex,current)
            
        },
        nextArrow: <NextArrow reviewNext={nextArrow} ARROW_NEXT={currentIndex < publication.length ? `assets/img/right-arrow-black.png` : 'assets/img/right_arrow.png'} ARROW_SIZE={currentIndex < publication.length ? "20px" : "12px"}/>,
        prevArrow: <PrevArrow reviewPrev={prevArrow} ARROW_PREW={currentIndex == 1 ? `assets/img/left_arrow.png` : `assets/img/left-arrow-black.png`} ARROW_SIZE={currentIndex==1 ? "12px":"20px"}/>};
        
        useEffect(()=>{
            const getPublication = async () =>{
                let data=await Api.get('/publications')
                console.log(data)
                console.log("publication.length",publication.length)
                setPublication(data.data)
            }
            getPublication()
        },[])

        let renderItems = publication.map(p=>{
            return (
                <div className="p-3" key={p.id}>
                <div className="cards">
                    <div className="d-flex">
                        <span className="text-danger text-fwb fw-bold">{p.title}</span>
                        <span className="text-70 ms-auto text-fwb">{new Date(p.publish_at).getFullYear()}</span>
                    </div>
                    <p className="text-description mt-4">
                        {p.description.length > 150 ? `${p.description.substring(0,150)}...` : p.description}
                    </p>
                    <span className="text-70 d-flex mt-auto">
                        <img src="assets/img/bookmark.png" className="d-inline me-2 my-auto"/>{p.type}
                    </span>
                </div>
            </div>
            
            )
        })

    return (
    renderItems ?
    <Slider {...settings2}>
       {renderItems}
    </Slider> : null
    )
}

export default Reviews;