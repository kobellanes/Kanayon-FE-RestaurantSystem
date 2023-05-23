import React, { useState, useEffect } from 'react';
import './Header.css';
import { setAccounts } from '../../../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import http from '../../../http';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Header() {
    const user_id = localStorage.getItem("user_id");
    const [data, setData] = useState('');
    const [counter, setCounter] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const fetchAccount = async () => {

        http.get('accounts').then(result => {
            setCounter('LOAD');
            const filter = result.data.filter((account) => account.id == user_id);

            if (filter[0] === undefined) {

            } else {
                setData(filter[0].isStatus);

            }

        }).catch(err => console.log(err.message));
    }
    useEffect(() => {
        fetchAccount();
    }, []);

    const logout = (e) => {
        localStorage.clear();

        window.location.href = "/";
    }

    const Manage = (e) => {
        navigate("/admin");
    }

    return (
        <>
            {
                counter == "LOAD" ?
                    <main className="llanesk-header pt-1 pb-0 ps-1">

                        <div className="llanesk-navb-text ms-0 mx-lg-0 mt-2 d-flex justify-content-center align-items-center px-4 px-lg-5"
                            data-navbar-on-scroll="data-navbar-on-scroll">
                            <div className="d-flex align-items-center mt-1">
                                <img className="rounded-pill llanesk-logo" src={require('../../../assets/logo.jpg')}></img>
                            </div>


                            <div className="llanesk-con">

                                <div className="container-fluid llanesk-navb-items align-items-center d-none d-xl-flex d-lg-flex justify-content-end">

                                    <div className="llanesk-item fs-4 d-flex flex-row">
                                        <Link to="/" className="llanesk-links fa-solid fa-house d-xxl-none d-xl-none d-lg-flex text-decoration-none fs-2"></Link>
                                        <Link className="llanesk-links text-decoration-none fw-light d-lg-none d-xl-flex fs-2" to="/">Home</Link>
                                    </div>

                                    <div className="llanesk-item fs-4 d-flex flex-row">
                                        <Link to="/about" className="llanesk-links fa-solid fa-address-card d-xxl-none d-xl-none d-lg-flex text-decoration-none fs-2"></Link>
                                        <Link className="llanesk-links text-decoration-none fw-light d-lg-none d-xl-flex fs-2" to="/about">About</Link>
                                    </div>

                                    <div className="llanesk-item fs-4 d-flex flex-row">
                                        <Link to="/ordernow" className="llanesk-links fa-solid fa-cart-shopping d-xxl-none d-xl-none d-lg-flex text-decoration-none fs-2"></Link>
                                        <Link className="llanesk-links text-decoration-none fw-light d-lg-none d-xl-flex fs-2" to="/ordernow">Order Now</Link>
                                    </div>

                                    {
                                        data == "ACTIVE" ?
                                            <div className="llanesk-item-button1 fs-4">
                                                <a onClick={logout} className="llanesk-log2 text-decoration-none d-flex justify-content-center fs-3 text-light align-items-center fw-light" type="button">Logout</a>
                                            </div>
                                            :
                                            data == "ADMIN" ?
                                                <div className="llanesk-item-button1 fs-4">
                                                    <a onClick={Manage} className="llanesk-log2 text-decoration-none d-flex justify-content-center fs-3 text-light align-items-center fw-light" type="button">Main Page</a>
                                                </div>
                                                :

                                                <div className="llanesk-item-button2 fs-4">
                                                    <Link className="llanesk-log text-decoration-none d-flex justify-content-center fs-3 text-light align-items-center fw-light" to="/login" type="button">Login/Register</Link>
                                                </div>
                                    }


                                </div>
                            </div>

                            <div className="llanesk-mobile-toggler fs-1 fw-light mobile-toggler d-lg-none px-3">
                                <a className="llanesk-links text-decoration-none" to="#" data-bs-toggle="modal" data-bs-target="#navbModal">
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
                                                    <li className="" data-bs-dismiss="modal" aria-label="Close">
                                                        <Link to="/" className="text-decoration-none fs-2 pb-1 me-3 d-block" >
                                                            <i className="fa-solid fa-house me-2"></i>
                                                            Home
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="llanesk-modal-line container-fluid pt-2">
                                                <ul className="list-unstyled">
                                                    <li className="" data-bs-dismiss="modal" aria-label="Close">
                                                        <Link to="/about" className="text-decoration-none fs-2 pb-1 me-3 d-block">
                                                            <i className="fa-solid fa-address-card me-2"></i>
                                                            About Us
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="llanesk-modal-line container-fluid pt-2">
                                                <ul className="list-unstyled">
                                                    <li className="" data-bs-dismiss="modal" aria-label="Close">
                                                        <Link to="/ordernow" className="text-decoration-none fs-2 pb-1 me-3 d-block">
                                                            <i className="fa-solid fa-cart-shopping me-2"></i>
                                                            Order Now
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {
                                                data == "ACTIVE" ?
                                                    <>
                                                        <li className="" data-bs-dismiss="modal" aria-label="Close">
                                                            <a onClick={logout} className="m-0 text-decoration-none llanesk-navb-button text-light d-flex justify-content-center align-items-center fs-5" type="button" >Logout</a>
                                                        </li>
                                                    </>
                                                    : data == "ADMIN" ?
                                                        <>
                                                            <li className="" data-bs-dismiss="modal" aria-label="Close">
                                                                <a onClick={Manage} className="m-0 text-decoration-none llanesk-navb-button text-light d-flex justify-content-center align-items-center fs-5" type="button" >Main Page</a>
                                                            </li>
                                                        </>
                                                        :
                                                        <>
                                                            <li className="" data-bs-dismiss="modal" aria-label="Close">
                                                                <Link to="/login" className="m-0 text-decoration-none llanesk-navb-button text-light d-flex justify-content-center align-items-center fs-5" type="button" >Login/Register</Link>
                                                            </li>
                                                        </>

                                            }


                                        </div>

                                        <div className="llanesk-mobile-modal-footer mobile-modal-footer d-flex justify-content-center my-5 fs-2">

                                            <Link target="_blank" to="https://www.instagram.com/explore/locations/106845685483113/kanayon-inasal/"><i className="fa-brands fa-instagram me-5"></i></Link>
                                            <Link target="_blank" to="https://www.facebook.com/kanayoninasal"><i className="fa-brands fa-facebook ms-5"></i></Link>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </main >
                    :
                    <div className="d-flex spinner-border justify-content-center container-fluid text-light mt-5 mb-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            }


        </>
    );
}

export default Header;