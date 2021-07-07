import React from 'react';

const Footer = () =>{

    return (
        <div>
                <footer class="container-fluid py-100">
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            <a class="navbar-brand m-0 p-0"><img src="assets/img/logo.png" alt=""/></a>
                            <p class="text-description mb-0 mt-4">
                                SigTuple builds intelligent screening solutions to aid diagnosis through AI-powered analysis of
                                                                                        visual medical data.
                            </p>
                            <div class="d-flex my-4">
                                <a href="" class="text-decoration-none text-danger fw-bold text-fwb">AI100</a>
                                <a href="" class="text-decoration-none text-danger fw-bold text-fwb mx-5">Shonit</a>
                                <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Shrava</a>
                            </div>
                            <p class="text-description mb-0">
                                Copyright © 2015-2020
                            </p>
                            <p class="text-description mb-0">
                                SigTuple Technologies Private Limited.
                            </p>
                            <p class="text-description mb-0">
                                All Rights Reserved. |
                                <b>Terms & Conditions</b>
                            </p>
                        </div>
                        <div class="col-4 d-flex">
                            <div class="flex-column d-flex justify-content-between h-100 mx-auto">
                                <a href="" class="text-decoration-none text-danger fw-bold text-fwb">About Us</a>
                                <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Career</a>
                                <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Research</a>
                                <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Products</a>
                                <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Blog & News</a>
                                <a href="" class="text-decoration-none text-danger fw-bold text-fwb">Contact Us</a>
                            </div>
                        </div>
                        <div class="col-4">
                            <p class="text-description mb-0 fw-bold">
                                SigTuple Technologies Pvt. Ltd.
                            </p>
                            <p class="text-description mb-0">
                                First Floor, L-162, 14th Cross Rd, Sector 6, HSR Layout, Karnataka, 560102, India
                            </p>
                            <p class="text-description mb-0 mt-4">
                                Mon-Sat: 9 AM – 6 PM
                            </p>
                            <p class="text-description mb-4">
                                Sun: Closed
                            </p>
                            <div>
                                <i class="bi bi-facebook"></i>
                                <i class="bi bi-youtube mx-3"></i>
                                <i class="bi bi-linkedin"></i>
                                <div class="row mb-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;