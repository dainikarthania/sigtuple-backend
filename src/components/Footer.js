import React from 'react';

const Footer = () =>{

    return (
        <div>
                <footer className="container-fluid py-100">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <a className="navbar-brand m-0 p-0"><img src="assets/img/logo.png" alt=""/></a>
                            <p className="text-description mb-0 mt-4">
                                SigTuple builds intelligent screening solutions to aid diagnosis through AI-powered analysis of
                                                                                        visual medical data.
                            </p>
                            <div className="d-flex my-4">
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">AI100</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb mx-5">Shonit</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Shrava</a>
                            </div>
                            <p className="text-description mb-0">
                                Copyright © 2015-2020
                            </p>
                            <p className="text-description mb-0">
                                SigTuple Technologies Private Limited.
                            </p>
                            <p className="text-description mb-0">
                                All Rights Reserved. |
                                <b>Terms & Conditions</b>
                            </p>
                        </div>
                        <div className="col-4 d-flex">
                            <div className="flex-column d-flex justify-content-between h-100 mx-auto">
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">About Us</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Products</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Research</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Career</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Blog & News</a>
                                <a href="" className="text-decoration-none text-danger fw-bold text-fwb">Contact Us</a>
                            </div>
                        </div>
                        <div className="col-4">
                            <p className="text-description mb-0 fw-bold">
                                SigTuple Technologies Pvt. Ltd.
                            </p>
                            <p className="text-description mb-0">
                                First Floor, L-162, 14th Cross Rd, Sector 6, HSR Layout, Karnataka, 560102, India
                            </p>
                            <p className="text-description mb-0 mt-4">
                                Mon-Sat: 9 AM – 6 PM
                            </p>
                            <p className="text-description mb-4">
                                Sun: Closed
                            </p>
                            <div>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-youtube mx-3"></i>
                                <i className="bi bi-linkedin"></i>
                                <div className="row mb-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;