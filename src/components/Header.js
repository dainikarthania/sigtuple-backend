import React from 'react';

const Header = () =>{

    return (
     <div>
        <div class="container pt-4">
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand"><img src="assets/img/logo.png" alt=""/></a>
                <div class="d-flex">
                    <button class="me-4 px-4">Book a Demo</button>
                    <i class="bi bi-person-circle my-auto me-5"></i>
                    <div class="menu-btn my-auto" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="bar"></div>
                        <div class="bar mt-1"></div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
        <div class="offcanvas offcanvas-end border-0" tabindex="-1" id="offcanvasRight" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header position-relative">
            <i class="bi bi-x-lg text-danger menu-close cursor-pointer ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></i>
            <i class="bi bi-x-lg text-danger cursor-pointer ms-auto invisible"></i>
        </div>
        <div class="offcanvas-body">
            <ul>
                <li>About Us</li>
                <li>Products</li>
                <li>Research</li>
                <li>Career</li>
                <li>Contact Us</li>
            </ul>
            <div class="social">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-youtube mx-3"></i>
                <i class="bi bi-linkedin"></i>
                <div class="row mb-3"></div>
                <button class="mt-3 px-4">
                    Book a Demo
                </button>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Header;