import React, { useState, useEffect } from 'react';
import "./OrderNow.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import http from '../../../http';
import { Link } from 'react-router-dom';

function OrderNow() {
    const [counter, setCounter] = useState('');
    const fetchLoad = async () => {
        http.get('accounts').then(result => {
            setCounter('LOAD');
        }).catch(err => console.log(err.message));

    }
    useEffect(() => {
        fetchLoad();
    }, []);

    return (
        <>
            <Header>

            </Header>

            {
                counter == "LOAD" ?
                    <>

                        <section className="dese_home-first mt-5 pt-2">

                            <div className="row">

                                <div className="text-center">

                                    <div className=" carousel slide" id="dese_carousel" data-bs-ride="carousel" data-bs-interval="3000">

                                        <div className="carousel-inner">

                                            <div className="carousel-item active">
                                                <div className="dese_images col-12 mb-3 mb-md-0">
                                                    <img className="dese_order_img img-fluid rounded-5" src={require('../../../assets/order-carousel-img1.png')} alt="Kanayon" />
                                                </div>

                                            </div>

                                            <div className="carousel-item">
                                                <div className="dese_images col-12 mb-3 mb-md-0">
                                                    <img className="dese_order_img img-fluid rounded-5" src={require('../../../assets/order-carousel-img2.png')} alt="Kanayon..." />
                                                </div>

                                            </div>

                                            <div className="carousel-item">
                                                <div className="dese_images col-12 mb-3 mb-md-0">
                                                    <img className="dese_order_img img-fluid rounded-5" src={require('../../../assets/order-carousel-img3.png')} alt="Kanayon..." />
                                                </div>

                                            </div>

                                            {/* <div className="carousel-item">
                                    <div className="dese_images col-12 mb-3 mb-md-0">
                                        <img className="dese_order_img img-fluid rounded-5" src={require('../../../assets/menu.jpg')} alt="Kanayon..." />
                                    </div>

                                </div> */}

                                            <div className="row">
                                                <button className="carousel-control-prev" type="button" data-bs-target="#dese_carousel"
                                                    data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span
                                                        className="visually-hidden">Previous</span></button>
                                                <button className="carousel-control-next" type="button" data-bs-target="#dese_carousel"
                                                    data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span
                                                        className="visually-hidden">Next </span></button>

                                            </div>


                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>

                        <section className="llanesk-ordernow m-5 px-5 pb-4">

                            <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center pt-2">
                                <h1 className="llanesk-ordernow-title fw-light pb-2 text-light">Tuloy tuloy ang bange! Tara Tikme!</h1>
                                <div className="llanesk-ordernow-border mb-3 text-center"></div>

                                <div className="d-flex justify-content-center align-items-center flex-row mt-4 col-6">
                                    <div>
                                        <Link to="/orderhere" className="llanesk-ordernow-orderpage btn fw-light fw-light text-center text-light justify-content-center p-4 p-md-3 mx-3" tabIndex="-1" role="button" aria-disabled="true">
                                            <i className="fa-sharp fa-solid fa-bag-shopping me-2"></i>
                                            ORDER HERE
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/vieworder" className="llanesk-ordernow-orderlist btn fw-light text-light justify-content-center p-4 p-md-3 mx-3" tabIndex="-1" role="button" aria-disabled="true">
                                            <i className="fa-solid fa-magnifying-glass me-2"></i>
                                            VIEW ORDER LIST
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <div className="container-fluid d-flex mx-xl-5 px-xl-5">
                                    <div className="container-fluid mx-xl-4 text-center text-xl-start">
                                        <h4 className="llanesk-ordernow-featured fw-light text-light mt-4">Featured Items</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className="mx-xl-5 mx-lg-0 mx-md-3">
                                    <div className="row g-4 mt-3 px-xxl-5 mx-xxl-5 px-xl-3 mx-xl-3 px-lg-1 mx-md-0 px-md-0">

                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <Link to="/orderhere" tabIndex="-1" role="button" aria-disabled="true"><img className="llanesk-ordernow-featuredpic card-img rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/paa.jpg')} alt="Paa Inasal"></img></Link>
                                                </div>
                                                <h4 className="llanesk-ordernow-featuredlabel mt-3 text-light fw-light text-center">Paa Inasal</h4>
                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="">
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <Link to="/orderhere" tabIndex="-1" role="button" aria-disabled="true"><img className="llanesk-ordernow-featuredpic card-img rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/liempo.jpg')} alt="Liempo"></img></Link>
                                                </div>
                                                <h4 className="llanesk-ordernow-featuredlabel mt-3 text-light fw-light text-center">Liempo</h4>
                                            </div>

                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="">
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <Link to="/orderhere" tabIndex="-1" role="button" aria-disabled="true"><img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/barbeque.jpg')} alt="Pork Barbecue"></img></Link>
                                                </div>
                                                <h4 className="llanesk-ordernow-featuredlabel mt-3 text-light fw-light text-center">Pork Barbecue</h4>
                                            </div>

                                        </div>

                                        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                                            <div className="">
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <Link to="/orderhere" tabIndex="-1" role="button" aria-disabled="true"><img className="llanesk-ordernow-featuredpic card-img h-100 rounded-5 rounded-top-3 rounded-end-3" src={require('../../../assets/halohalo.jpg')} alt="Halo-Halo"></img></Link>
                                                </div>
                                                <h4 className="llanesk-ordernow-featuredlabel mt-3 text-light fw-light text-center">Halo-Halo</h4>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </section >


                        <Footer></Footer>
                    </>
                    :
                    ""
            }
        </>
    );
}


export default OrderNow;