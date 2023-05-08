import React from 'react';
import './Header.css';

function Header() {
    const user_status = localStorage.getItem("user_status");

    const logout = (e) => {
        localStorage.clear();

        window.location.href = '/'
    }

    const Manage = (e) => {
        window.location.href = '/admin';
    }

    return (
        <>
            <main className="llanesk-header pt-1 pb-0 ps-1">

                <div className="llanesk-navb-text ms-0 mx-lg-0 mt-2 d-flex justify-content-center align-items-center px-4 px-lg-5"
                    data-navbar-on-scroll="data-navbar-on-scroll">
                    <div className="d-flex align-items-center mt-1">
                        <img className="rounded-pill llanesk-logo" src={require('../../../assets/logo.jpg')}></img>
                    </div>


                    <div className="llanesk-con">

                        <div className="container-fluid llanesk-navb-items align-items-center d-none d-xl-flex d-lg-flex justify-content-end">

                            <div className="llanesk-item fs-4 d-flex flex-row">
                                <a href="/" className="llanesk-links fa-solid fa-house d-xxl-none d-xl-none d-lg-flex text-decoration-none fs-2"></a>
                                <a className="llanesk-links text-decoration-none fw-light d-lg-none d-xl-flex fs-2" href="/">Home</a>
                            </div>

                            <div className="llanesk-item fs-4 d-flex flex-row">
                                <a href="about" className="llanesk-links fa-solid fa-address-card d-xxl-none d-xl-none d-lg-flex text-decoration-none fs-2"></a>
                                <a className="llanesk-links text-decoration-none fw-light d-lg-none d-xl-flex fs-2" href="/about">About</a>
                            </div>

                            <div className="llanesk-item fs-4 d-flex flex-row">
                                <a href="ordernow" className="llanesk-links fa-solid fa-cart-shopping d-xxl-none d-xl-none d-lg-flex text-decoration-none fs-2"></a>
                                <a className="llanesk-links text-decoration-none fw-light d-lg-none d-xl-flex fs-2" href="/ordernow">Order Now</a>
                            </div>

                            {
                                user_status == "ACTIVE" ?
                                    <div className="llanesk-item-button1 fs-4">
                                        <a onClick={logout} className="llanesk-log2 text-decoration-none d-flex justify-content-center fs-3 text-light align-items-center fw-light" type="button">Logout</a>
                                    </div>

                                    :
                                    user_status == "ADMIN" ?
                                        <div className="llanesk-item-button1 fs-4">
                                            <a onClick={Manage} className="llanesk-log2 text-decoration-none d-flex justify-content-center fs-3 text-light align-items-center fw-light" type="button">Main Page</a>
                                        </div>
                                        :

                                        <div className="llanesk-item-button2 fs-4">
                                            <a className="llanesk-log text-decoration-none d-flex justify-content-center fs-3 text-light align-items-center fw-light" href="/login" type="button">Login/Register</a>
                                        </div>
                            }


                        </div>
                    </div>

                    <div className="llanesk-mobile-toggler fs-1 fw-light mobile-toggler d-lg-none px-3">
                        <a className="llanesk-links text-decoration-none" href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
                            <i className="fa-solid fa-bars"></i>
                        </a>
                    </div>

                    <div className="llanesk-mainmod modal fade" id="navbModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="llanesk-modal m-0 modal-dialog">
                            <div className="llanesk-modal-content modal-content overflow-y-scroll">

                                <div className="llanesk-m-header modal-header d-flex text-white my-0 pt-4 justify-content-center mx-auto me-5">
                                    <h2 className="text-white llanesk-modal-text">Kanayon Inasal</h2>
                                    <button type="button" className="llanesk-btn-close btn-close pb-3 pe-2" data-bs-dismiss="modal" aria-label="Close"><i
                                        className="fa-solid fa-xmark fs-5 text-light"></i></button>
                                </div>

                                <div className="llanesk-modal-body modal-body mx-auto mt-5 pt-5">

                                    <div className="llanesk-modal-line container-fluid pt-2">
                                        <ul className="list-unstyled">
                                            <li className=""><a href="/" className="text-decoration-none fs-2 pb-1 me-3 d-block"><i className="fa-solid fa-house me-2"></i>Home</a></li>
                                        </ul>
                                    </div>

                                    <div className="llanesk-modal-line container-fluid pt-2">
                                        <ul className="list-unstyled">
                                            <li className=""><a href="/about" className="text-decoration-none fs-2 pb-1 me-3 d-block"><i className="fa-solid fa-address-card me-2"></i>About Us</a></li>
                                        </ul>
                                    </div>

                                    <div className="llanesk-modal-line container-fluid pt-2">
                                        <ul className="list-unstyled">
                                            <li className=""><a href="/ordernow" className="text-decoration-none fs-2 pb-1 me-3 d-block"><i className="fa-solid fa-cart-shopping me-2"></i>Order Now</a></li>
                                        </ul>
                                    </div>

                                    {
                                        user_status == "ACTIVE" ?
                                            <a onClick={logout} className="text-decoration-none llanesk-navb-button text-light d-flex justify-content-center align-items-center fs-5" type="button">Logout</a>
                                            : user_status == "ADMIN" ?
                                                <a onClick={Manage} className="text-decoration-none llanesk-navb-button text-light d-flex justify-content-center align-items-center fs-5" type="button">Main Page</a>
                                                :
                                                <a href="/login" className="text-decoration-none llanesk-navb-button text-light d-flex justify-content-center align-items-center fs-5" type="button">Login/Register</a>

                                    }


                                </div>

                                <div className="llanesk-mobile-modal-footer mobile-modal-footer d-flex justify-content-center my-5 fs-2">

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