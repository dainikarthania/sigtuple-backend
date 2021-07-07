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
import '../css/LandingPage.css';

import Header from './Header';


const LandingPage = () => {
    return (
        <div>
            <div class="container-fluid hero-banner">
                <Header/>
                <div class="container hero-section d-flex h-100 flex-column">
                    <div class="m-auto text-center">
                        <div id="zoom">
                            <div class="small">
                                <h1>The<b> Future of Microscopy</b> Is Here!</h1>
                                <h2>We are democratizing microscopy through AI, robotics, and cloud computing.</h2>
                            </div>
                        </div>
                        <div class="eye-section">
                            <span class="text-danger font-regular fw-bold">Check our products</span>
                            <div class="eye mt-2">
                                <img src="assets/img/eye.png"/>
                            </div>
                        </div>
                        <div class="verticle"></div>
                    </div>
                </div>
            </div>

            <div class="container-fluid microscope pt-5">
                <div class="container">
                    <div class="row">
                        <div class="w-auto my-auto d-flex flex-column">
                            <div class="blood">
                                <img src="assets/img/shonit.png"/>
                            </div>
                            <div class="mx-auto mt-3">
                                <p class="text-description m-0">
                                Blood
                                </p>
                                <p class="text-description m-0 fw-bold">Analyser</p>
                            </div>
                        </div>
                        <div class="col-8 mx-auto bg-white micro-product">
                            <div class="text-center mt-5">
                                <img src="assets/img/AI100_2 1.png" class="img-fluid a1 user-select-none"/>
                            </div>
                            <MicroProduct/>
                            <p class="text-description text-center mt-4">
                                The AI100 is an AI-driven smart robotic microscope.
                            </p>
                            <button class="d-block mx-auto px-4 explore">Explore
                                <i class="bi bi-arrow-right-short"></i>
                            </button>

                        </div>
                        <div class="w-auto my-auto d-flex flex-column">
                            <div class="blood">
                                <img src="assets/img/urine.png"/>
                            </div>
                            <div class="mx-auto mt-3">
                                <p class="text-description m-0">Urine</p>
                                <p class="text-description m-0 fw-bold">Analyser</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="policy container">
                <div class="col-12 my-auto">
                    <div class="row">
                        <div class="col-4">
                            <h5>ACCURACY</h5>
                            <div class="d-flex mt-3">
                                <h1>20</h1>
                                <p class="text-description mt-auto ps-3">Clinical Studies
                                    <br/>
                                    Performed</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <h5>Innovation</h5>
                            <div class="d-flex mt-3">
                                <h1>15</h1>
                                <p class="text-description mt-auto ps-3">Granted Patents in
                                    <br/>
                                    The US and India</p>
                            </div>
                        </div>
                        <div class="col-4">
                            <h5>Acceptance</h5>
                            <div class="d-flex mt-3">
                                <h1>31</h1>
                                <p class="text-description mt-auto ps-3">Publications in Medical
                                    <br/>
                                    and Technical Journals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <VideoDescription/>


            <div class="container py-100">
                <h1 class="text-title text-center pb-3">How does
                    <b> AI100 work?</b>
                </h1>
                <div class="col-8 mx-auto mt-4">
                    <div class="d-flex mb-3">
                        <ul class="nav nav-pills mb-3 mx-auto" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link px-5 active nav-link-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Shonit</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link px-5 nav-link-2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Shrava</button>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content" id="pills-tabContent">
                        <Shonit/>
                        <Shrava />
                    </div>
                </div>
            </div>

            <div class="container py-100">
                <h1 class="text-title text-center">
                    Bringing Speed & Precision with
                    <b> Extensive R&D</b>
                </h1>
                <div class="col-xxl-9 col-10 mx-auto bg-white mt-5">
                    <Reviews/>
                </div>
                <div class="col-12 text-center mt-5">
                    <a href="" class="text-decoration-none text-danger fw-bold text-fwb">View All
                        <i class="bi bi-arrow-right-short"></i>
                    </a>
                </div>
            </div>

            <div class="container-fluid our-client d-flex">
                <div class="container my-auto">
                    <div class="row mx-0">
                        <h1 class="text-title text-center">From
                            <b> Our Clients</b>
                        </h1>
                        <div class="col-xxl-9 col-10 mx-auto mt-5 position-relative">
                            <img src="assets/img/cot.png" class="cot"/>
                            <Client/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container py-100">
                <h1 class="text-title text-center">
                    Know
                    <b> What’s Brewing</b>
                </h1>
                <p class="text-description text-center">
                    Get access to the breakthroughs we make in our research and innovation every day.
                </p>
                <div class="col-xxl-10 col-11 mx-auto bg-white mt-5">
                    <Blogs/>
                </div>
            </div>
            <div class="container-fluid award d-flex">
                <div class="container my-auto">
                    <h1 class="text-title text-center">
                        Awards &
                        <b> Recognitions</b>
                    </h1>
                    <div class="col-12 mx-auto mt-5">
                        <Awards/>
                    </div>
                </div>
            </div>
            <div class="container-fluid simple d-flex">
                <div class="container my-auto">
                    <h1>Simple. Quick. Accurate.
                        <br/>
                        <b>See it for yourself.</b>
                    </h1>
                    <p class="my-3">Let us show you how our device helps
                        <br/>
                        you transform your workflow</p>
                    <button class="mt-3 px-4 shadow-none">
                        Book a Demo
                    </button>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage;
