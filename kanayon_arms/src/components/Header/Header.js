import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <main className="llanesk-header mt-1">

                <div className="llanesk-navb-text ms-5 mt-2 d-flex justify-content-center align-items-center" data-navbar-on-scroll="data-navbar-on-scroll">
                    <div className="d-flex align-items-center mt-1">
                        <img className="rounded-pill llanesk-logo" src={require('../../assets/logo.jpg')}></img>
                        <img className="llanesk-logotext" src={require('../../assets/text.png')}></img>
                    </div>


                    <div className="llanesk-con me-5">

                        <div className="container-fluid llanesk-navb-items align-items-center d-none d-xl-flex d-lg-flex justify-content-end me-lg-5">

                            <div className="llanesk-item fs-4 d-flex flex-row">
                                <a href="/" className="llanesk-links fa-solid fa-house d-xxl-none d-xl-none d-lg-flex text-decoration-none fs-2"></a>
                                <a className="llanesk-links text-decoration-none fw-light d-lg-none d-xl-flex" href="/">Home</a>
                            </div>

                            <div className="llanesk-item fs-4 d-flex flex-row">
                                <a href="about" className="llanesk-links fa-solid fa-address-card d-xxl-none d-xl-none d-lg-flex text-decoration-none fs-2"></a>
                                <a className="llanesk-links text-decoration-none fw-light d-lg-none d-xl-flex" href="/about">About</a>
                            </div>

                            <div className="llanesk-item fs-4 d-flex flex-row">
                                <a href="ordernow" className="llanesk-links fa-solid fa-cart-shopping d-xxl-none d-xl-none d-lg-flex text-decoration-none fs-2"></a>
                                <a className="llanesk-links text-decoration-none fw-light d-lg-none d-xl-flex" href="/ordernow">Order Now</a>
                            </div>

                            <div className="llanesk-item-button fs-4">
                                <a className="llanesk-log text-decoration-none d-flex justify-content-center fs-6 text-light align-items-center" href="/login" type="button">Login/Register</a>
                            </div>

                        </div>
                    </div>

                    <div className="llanesk-mobile-toggler fs-1 fw-light mobile-toggler d-lg-none me-5">
                        <a className="llanesk-links text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
                            <i className="fa-solid fa-bars"></i>
                        </a>
                    </div>

                    <div className="llanesk-mainmod modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="llanesk-modal m-0 modal-dialog">
                            <div className="llanesk-modal-content modal-content overflow-y-scroll">

                                <div className="llanesk-m-header modal-header d-flex text-white my-0 mx-auto py-4 justify-content-center">
                                    <img className="rounded-pill llanesk-logos" src={require('../../assets/logo.jpg')}></img>
                                    <img className="llanesk-modalpic align-items-center mt-2" src={require('../../assets/text.png')}></img>
                                    <button type="button" className="llanesk-btn-close btn-close pb-3 pe-2" data-bs-dismiss="modal" aria-label="Close"><i
                                        className="fa-solid fa-xmark fs-5 text-light"></i></button>
                                </div>

                                <div className="llanesk-modal-body modal-body mx-auto mt-5 pt-5">

                                    <div className="llanesk-modal-line d-flex py-2">
                                        <i className="fa-solid fa-house fs-2 ps-2 pb-1 me-3"></i><a className="text-decoration-none fs-6" href="/">Home</a>
                                    </div>

                                    <div className="llanesk-modal-line d-flex py-2">
                                        <i className="fa-solid fa-address-card fs-2 ps-2 pb-1 me-3"></i><a className="text-decoration-none fs-6" href="/about">About Us</a>
                                    </div>

                                    <div className="llanesk-modal-line d-flex py-2">
                                        <i className="fa-solid fa-cart-shopping fs-2 ps-2 pb-1 me-3"></i> <a className="text-decoration-none fs-6" href="/ordernow">Order Now</a>
                                    </div>

                                    <a href="/login" className="text-decoration-none llanesk-navb-button text-light d-flex justify-content-center align-items-center fs-5" type="button">Login/Register</a>
                                </div>

                                <div className="llanesk-mobile-modal-footer mobile-modal-footer d-flex justify-content-center mt-5 fs-2">

                                    <a target="_blank" href="https://www.instagram.com/explore/locations/106845685483113/kanayon-inasal/"><i className="fa-brands fa-instagram me-5"></i></a>
                                    <a target="_blank" href="https://www.facebook.com/kanayoninasal"><i className="fa-brands fa-facebook ms-5"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </main >

        </>
    );
}

export default Header;