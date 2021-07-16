import React from 'react';

const Header = () =>{

    return (
     <div className="sticky_header">
        <div className="container pt-4">
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand"><img src="assets/img/logo.png" alt=""/></a>
                <div className="d-flex">
                    <button className="me-4 px-4">Book a Demo</button>
                    <i className="bi bi-person-circle my-auto me-5"></i>
                    <div className="menu-btn my-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div className="bar"></div>
                        <div className="bar mt-1"></div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
        <div className="offcanvas offcanvas-end border-0" tabIndex="-1" id="offcanvasRight" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header position-relative">
            <i className="bi bi-x-lg text-danger menu-close cursor-pointer ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></i>
            <i className="bi bi-x-lg text-danger cursor-pointer ms-auto invisible"></i>
        </div>
        <div className="offcanvas-body">
            <ul>
                <li>About Us</li>
                <li>Products</li>
                <li>Research</li>
                <li>Career</li>
                <li>Contact Us</li>
            </ul>
            <div className="social">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-youtube mx-3"></i>
                <i className="bi bi-linkedin"></i>
                <div className="row mb-3"></div>
                <button className="mt-3 px-4">
                    Book a Demo
                </button>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Header;