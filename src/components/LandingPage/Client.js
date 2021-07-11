import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Api from '../../Api';
import NextArrow from '../Arrow/NextArrow';
import PrevArrow from '../Arrow/PrevArrow';

const Client = () => {
    const [clients,setClient]=useState([])
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

    useEffect(()=>{
        // console.log(Api.defaults.baseURL)
        const getClient = async () =>{
            let data=await Api.get('/clients')
            console.log(data)
            setClient(data.data)
        }
        getClient()
    },[])

    const renderItems = clients.map(c=>{
        return (
            <div className="d-flex mx-0 px-2 pb-2" key={c.id}>
            <div className="col-6 client-say d-flex flex-column" style={{"backgroundColor": "white","border": "2px solid white","borderRadius": "20px","padding": "2px"}}>
                <div className="my-auto">
                    <p className="text-description fw-bold">
                        “{c.review}”
                    </p>
                    <div className="d-flex name mt-4">
                        <img src={`${Api.defaults.baseURL}${c.profilepic[0].url}`} className="me-3"/>
                        <div>
                            <h3 className="text-sub fw-bold mb-1">
                                {c.Username}
                            </h3>
                            <p>
                                {c.designation},
                            </p>
                            <p>
                                {c.work_at}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 company-say d-flex flex-column"
                style={
                    {backgroundColor: "red"}
            }>
                <div className="m-auto w-50">
                    <h1 className="text-title text-white fw-bold">
                        {c.review_title}
                    </h1>
                    <p className="text-description text-white">
                        {c.short_review}
                    </p>
                </div>
            </div>
        </div>
        )
    })


    return (
        <div className="client-arrows">
        <Slider {...settings_clinet}>
            {renderItems}
        </Slider>
        </div>
    )
}

export default Client;