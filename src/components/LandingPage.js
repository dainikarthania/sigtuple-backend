import React, {useState, useEffect, useRef} from 'react';
import Slider from "react-slick";
import NextArrow from './Arrow/NextArrow';
import PrevArrow from './Arrow/PrevArrow';
import MicroProduct from './LandingPage/MicroProduct';
import VideoDescription from './LandingPage/VideoDescription';
import Shonit from './LandingPage/Shonit';
import Shrava from './LandingPage/Shrava';
import Reviews from './LandingPage/Reviews';
import Client from './LandingPage/Client';
import Blogs from './LandingPage/Blogs';
import Awards from './LandingPage/Awards';
import Footer from './Footer';
import SectionCounter from './LandingPage/SectionCounter';
import '../css/LandingPage.css';

import Header from './Header';


const LandingPage = () => {
    const [shonitStyle,setShonitStyle]=useState(false)
    const [shravaStyle,setShravaStyle]=useState(false)

    return (
        <div>
            <div className="container-fluid hero-banner">
                <Header/>
                <div className="container hero-section d-flex h-100 flex-column">
                    <div className="m-auto text-center">
                        <div id="zoom">
                            <div className="small">
                                <h1>The<b> Future of Microscopy</b> is Here!</h1>
                                <center><h2>We are democratizing microscopy through AI, robotics, and cloud computing.</h2></center>
                            </div>
                        </div>
                        
                        <a href="#product_sections"><div className="eye-section">
                            <span className="text-danger font-regular fw-bold">Check our products</span>
                            <div className="eye mt-2">
                                <img src="assets/img/eye.png"/>
                            </div>
                        </div>
                        </a>
                        <div className="verticle"></div>
                    </div>
                </div>
            </div>

            <div id="product_sections">
            <div className="container-fluid microscope pt-5">
                <div className="container">
                    <div className="row">
                        <div className="w-auto my-auto d-flex flex-column h-100 position-relative" onMouseEnter={(e=>{
                            e.preventDefault()
                            setShonitStyle(true)
                            setShravaStyle(false)
                        })} onMouseLeave={(e=>{
                            e.preventDefault();
                            console.log("hello 1")
                            setShonitStyle(false)
                        })}>
                            <div className="blood">
                                <img src="assets/img/shonit.png"/>
                            </div>
                            <div className="mx-auto mt-3">
                                <p className={`text-description m-0 ${shonitStyle ? `analysis_bold`:''}`}>
                                 Blood
                                </p>
                                <p className={`text-description m-0 fw-bold ${shonitStyle ? "analysis_bold":''}`}>Analyser</p>
                            </div>
                            <div className={`boold-hover mt-3 mx-auto ${shonitStyle ? `blood-hover-block`:'blood-hover-none'}`}>
                               <p>Shonit is an automated peripheral blood smear slide analyzer</p>
                        <button className="d-block px-4 explore mt-2">Explore
                            <i className="bi bi-arrow-right-short"></i></button>
                    </div>
                        </div>
                        <div className="col-8 mx-auto bg-white micro-product">
                            <div className="text-center mt-5">
                                <img src="assets/img/AI100_2 1.png" className="img-fluid a1 user-select-none"/>
                            </div>
                            <MicroProduct/>
                            <p className="text-description text-center mt-4">
                                The AI100 is an AI-driven smart robotic microscope.
                            </p>
                            <button className="d-block mx-auto px-4 explore">Explore
                                <i className="bi bi-arrow-right-short"></i>
                            </button>

                        </div>
                         <div className="w-auto my-auto d-flex flex-column h-100 position-relative" onMouseEnter={(e=>{
                            e.preventDefault()
                            setShravaStyle(true)
                        })} onMouseLeave={(e=>{
                            e.preventDefault();
                            console.log("hello 1")
                            setShravaStyle(false)
                        })}>
                            <div className="blood">
                                <img src="assets/img/urine.png"/>
                            </div>
                            <div className={`mt-3 mx-auto`}>
                                <p className={`text-description m-0 ${shravaStyle ? `analysis_bold`:''}`}>Urine</p>
                                <p className={`text-description m-0 fw-bold ${shravaStyle ? `analysis_bold`:''}`}>Analyser</p>
                                <div className={`boold-hover-shrava ${shravaStyle ? `blood-hover-shrava-block`:'blood-hover-shrava-none'}`}>
                               <p>Shrava is an automated peripheral blood smear slide analyzer</p>
                                <button className="d-block px-4 explore mt-2">Explore
                                <i className="bi bi-arrow-right-short"></i></button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <SectionCounter />
            <VideoDescription/>


            <div className="container py-100">
                <h1 className="text-title text-center pb-3">How does
                    <b> AI100 work?</b>
                </h1>
                <div className="col-8 mx-auto mt-4">
                    <div className="d-flex mb-3">
                        <ul className="nav nav-pills mb-3 mx-auto" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link px-5 active nav-link-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Shonit</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link px-5 nav-link-2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Shrava</button>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content" id="pills-tabContent">
                        <Shonit/>
                        <Shrava />
                    </div>
                </div>
            </div>

            <div className="container py-100">
                <h1 className="text-title text-center">
                    Bringing Speed & Precision with
                    <b> Extensive R&D</b>
                </h1>
                <div className="col-xxl-9 col-10 mx-auto bg-white mt-5">
                    <Reviews/>
                </div>
                <div className="col-12 text-center mt-5">
                    <a href="" className="text-decoration-none text-danger fw-bold text-fwb">View All
                        <i className="bi bi-arrow-right-short"></i>
                    </a>
                </div>
            </div>

            <div className="container-fluid our-client d-flex">
                <div className="container my-auto">
                    <div className="row mx-0">
                        <h1 className="text-title text-center">From
                            <b> Our Clients</b>
                        </h1>
                        <div className="col-xxl-9 col-10 mx-auto mt-5 position-relative">
                            <img src="assets/img/cot.png" className="cot"/>
                            <Client/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-100">
                <h1 className="text-title text-center">
                    Know
                    <b> What’s Brewing</b>
                </h1>
                <p className="text-description text-center">
                    Get access to the breakthroughs we make in our research and innovation every day.
                </p>
                <div className="col-xxl-10 col-11 mx-auto bg-white mt-5">
                    <Blogs/>
                </div>
            </div>
            <div className="container-fluid award d-flex">
                <div className="container my-auto">
                    <h1 className="text-title text-center">
                        Awards &
                        <b> Recognitions</b>
                    </h1>
                    <div className="col-12 mx-auto mt-5">
                        <Awards/>
                    </div>
                </div>
            </div>
            <div className="container-fluid simple d-flex">
                <div className="container my-auto">
                    <h1>Simple. Quick. Accurate.
                        <br/>
                        <b>See it for yourself.</b>
                    </h1>
                    <p className="my-3">Let us show you how our device helps
                        <br/>
                        you transform your workflow</p>
                    <button className="mt-3 px-4 shadow-none">
                        Book a Demo
                    </button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage;
