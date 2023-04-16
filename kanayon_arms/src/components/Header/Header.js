import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <main className="llanesk-header">
                <header className="llanesk-header-start">

                    <div className="container-fluid llanesk-con">

                        <div className="navb-logo">
                            {/* <img src="/img/logo.png" alt="Logo"> */}
                        </div>

                        <div className="llanesk-navb-items navb-items d-none d-xl-flex">

                            <div className="llanesk-item">
                                <a className="llanesk-links" href="/">Home</a>
                            </div>

                            <div className="llanesk-item">
                                <a className="llanesk-links" href="/about">About</a>
                            </div>

                            <div className="llanesk-item">
                                <a className="llanesk-links" href="/ordernow">Order Now</a>
                            </div>

                            <div className="llanesk-item-button">
                                <a className="llanesk-links" href="/login" type="button">Login/Register</a>
                            </div>
                        </div>


                        <div className="llanesk-hamburger mobile-toggler d-lg-none">
                            <a className="llanesk-links" href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
                                <i className="fa-solid fa-bars"></i>
                            </a>
                        </div>

                        <div className="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="llanesk-modal modal-dialog">
                                <div className="llanesk-modal-content modal-content">

                                    <div className="llanesk-m-header modal-header">
                                        {/* <img src="/img/logo-variant.png" alt="Logo"> */}
                                        <button type="button" className="llanesk-btn-close btn-close" data-bs-dismiss="modal" aria-label="Close"><i
                                            className="fa-solid fa-xmark"></i></button>
                                    </div>

                                    <div className="llanesk-modal-body modal-body">

                                        <div className="llanesk-modal-line">
                                            <i className="fa-solid fa-house"></i><a className="llanesk-links" href="/">Home</a>
                                        </div>

                                        <div className="llanesk-modal-line">
                                            <i className="fa-solid fa-bell-concierge"></i><a className="llanesk-links" href="/about">About Us</a>
                                        </div>

                                        <div className="llanesk-modal-line">
                                            <i className="fa-solid fa-file-lines"></i> <a className="llanesk-links" href="/ordernow">Order Now</a>
                                        </div>

                                        <a href="/login" className="llanesk-links llanesk-navb-button navb-button" type="button">Login/Register</a>
                                    </div>

                                    <div className="llanesk-mobile-modal-footer mobile-modal-footer">

                                        <a target="_blank" href="#"><i className="fa-brands fa-instagram"></i></a>
                                        <a target="_blank" href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        <a target="_blank" href="#"><i className="fa-brands fa-youtube"></i></a>
                                        <a target="_blank" href="#"><i className="fa-brands fa-facebook"></i></a>
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