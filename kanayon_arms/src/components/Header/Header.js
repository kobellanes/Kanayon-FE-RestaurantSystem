import React from 'react';
import './Header.css';
import logotext from '../../assets/text.png';
import logo from '../../assets/logo.jpg';

function Header() {
    return (
        <>
            <main className="llanesk-header pb-5">
                <header className="llanesk-header-start d-flex align-items-center">

                    <div className="llanesk-navb-text m-0 ms-5 mt-5 d-flex justify-content-center align-items-center">
                        <img className="rounded-pill llanesk-logo" src={logo}></img>
                        <img src={logotext}></img>
                    </div>

                    <div className="container-fluid llanesk-con d-flex justify-content-end mt-5">

                        <div className="llanesk-navb-items d-flex align-items-center justify-content-end d-none d-xl-flex d-lg-flex">

                            <div className="llanesk-item fs-4">
                                <a className="llanesk-links text-decoration-none fw-light" href="/">Home</a>
                            </div>

                            <div className="llanesk-item fs-4">
                                <a className="llanesk-links text-decoration-none fw-light" href="/about">About</a>
                            </div>

                            <div className="llanesk-item fs-4">
                                <a className="llanesk-links text-decoration-none fw-light" href="/ordernow">Order Now</a>
                            </div>

                            <div className="llanesk-item-button fs-4">
                                <a className="llanesk-log text-decoration-none d-flex justify-content-center fs-6 text-light align-items-center" href="/login" type="button">Login/Register</a>
                            </div>
                        </div>


                        <div className="fs-1 fw-light mobile-toggler d-lg-none">
                            <a className="llanesk-links text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
                                <i className="fa-solid fa-bars"></i>
                            </a>
                        </div>

                        <div className="llanesk-mainmod modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="llanesk-modal m-0 modal-dialog">
                                <div className="llanesk-modal-content modal-content overflow-y-scroll">

                                    <div className="llanesk-m-header modal-header d-flex text-white my-0 mx-auto py-4 justify-content-center">
                                        <img className="rounded-pill llanesk-logo" src={logo}></img>
                                        <img className="llanesk-modalpic align-items-center mt-2" src={logotext}></img>
                                        <button type="button" className="llanesk-btn-close btn-close pb-3 pe-2" data-bs-dismiss="modal" aria-label="Close"><i
                                            className="fa-solid fa-xmark fs-5 text-light"></i></button>
                                    </div>

                                    <div className="llanesk-modal-body modal-body mx-auto mt-5 pt-5">

                                        <div className="llanesk-modal-line d-flex py-2">
                                            <i className="fa-solid fa-house fs-2 ps-2 pb-1 me-3"></i><a className="text-decoration-none fs-6" href="/">Home</a>
                                        </div>

                                        <div className="llanesk-modal-line d-flex py-2">
                                            <i className="fa-solid fa-bell-concierge fs-2 ps-2 pb-1 me-3"></i><a className="text-decoration-none fs-6" href="/about">About Us</a>
                                        </div>

                                        <div className="llanesk-modal-line d-flex py-2">
                                            <i className="ms-1 fa-solid fa-file-lines fs-2 ps-2 pb-1 me-3"></i> <a className="text-decoration-none fs-6" href="/ordernow">Order Now</a>
                                        </div>

                                        <a href="/login" className="llanesk-links text-decoration-none llanesk-navb-button text-light d-flex justify-content-center align-items-center fs-5" type="button">Login/Register</a>
                                    </div>

                                    <div className="llanesk-mobile-modal-footer mobile-modal-footer d-flex justify-content-center mt-5 fs-2">

                                        <a target="_blank" href="https://www.instagram.com/explore/locations/106845685483113/kanayon-inasal/"><i className="fa-brands fa-instagram me-5"></i></a>
                                        <a target="_blank" href="https://www.facebook.com/kanayoninasal"><i className="fa-brands fa-facebook ms-5"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>


            </main >

        </>
    );
}

export default Header;