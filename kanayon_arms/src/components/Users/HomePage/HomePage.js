import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <Header>

            </Header>
            <div className="container-fluid">

                <section className="dese_home-first mt-5">

                    <div className="row">

                        <div className="text-center mb-3">

                            <div className="carousel slide" id="dese_carousel" data-bs-ride="carousel" data-bs-interval="3000">

                                <div className="carousel-inner">

                                    <div className="carousel-item active">
                                        <div className="dese_images col-12 mb-3 mb-md-0">
                                            <img className="dese_img img-fluid" src={require('../../../assets/carousel-img1.png')} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="dese_images col-12 mb-3 mb-md-0">
                                            <img className="dese_img img-fluid" src={require('../../../assets/carousel-img2.png')} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="dese_images col-12 mb-3 mb-md-0">
                                            <img className="dese_img img-fluid" src={require('../../../assets/carousel-img3.png')} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="dese_images col-12 mb-3 mb-md-0">
                                            <img className="dese_img img-fluid" src={require('../../../assets/carousel-img4.png')} alt="..." />
                                        </div>
                                    </div>

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
                </section >

                {/* <section className="austriak-bg d-flex mb-5">
                    <div className=" bg-light-gradient border-bottom border-white border-5"></div>
                    <div className="bg-holder overlay overlay-light"> </div>

                    <div className="container-austria">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="austria">KANAYON <span>INASAL</span></h1>
                                <h2>Good food choices are good investments.</h2>
                            </div>
                        </div>
                    </div>
                </section > */}
                <div className="row h-100 g-0">

                    <div className="col-xl-6 col-md-12">

                        <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">

                            <h4 className="fw-light text-light text-center fst-italic">Unli rice na binabalik balikan, Halina dine Kanayon!</h4>

                            <h1 className="fw-bold text-center">Delicious Food to fit your lifestyle.</h1>

                            <p className="mb-2 text-light fw-light">One of the reasons that people enjoy coming to a great restaurant is that when an extraordinary meal is placed in front of them, they feel honored, respected, and even a little bit loved.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">

                        <div className="card card-span h-100 text-white">
                            <img className="card-img h-100" src={require('../../../assets/family1.jpg')}
                                alt="Customers" />
                        </div>
                    </div>
                </div>

                <hr className="text-light" />

                <div className="px-4">
                    <div className="dese-h1 col-12 text-center fs-1 text-light fw-bold">
                        <h1>Let our food be the reason you smile today.</h1>
                    </div>

                    <div className="col-12 text-start fs-4 text-light fw-light">
                        <p className="lh-lg">At Kanayon Inasal, we believe that food should not only be delicious but also a source of joy and happiness. We take pride in creating meals that not only satisfy your hunger but also put a smile on your face. Our chefs are passionate about what they do and use only the freshest and finest ingredients to create dishes that are bursting with flavor.</p>
                        <h4 className="lh-lg fst-italic text-center">"Come and experience the joy of delicious meal that is made with love and care. Let our food be the reason you smile today. We look forward to serving you!"</h4>
                    </div>
                </div>

                <div className="row h-100 g-2 py-1">
                    <div className="col-md-4">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100"
                            src={require('../../../assets/customers17.jpg')} alt="Customers" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100" src={require('../../../assets/customers14.jpg')}
                            alt="Customers" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-span h-100 text-white"><img className="card-img h-100"
                            src={require('../../../assets/customers15.jpg')} alt="Customers" />
                            <div className="card-img-overlay bg-dark-gradient">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="austria-container">

                    <div className="row">
                        <div className="col-md-6">

                            <div className="card card-span h-100 text-white">
                                <img className="card-img h-100" src={require('../../../assets/family.jpg')}
                                    alt="Customers" />
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-12">

                            <div className="text-center bg-300 p-4 h-100 d-flex flex-column justify-content-center">

                                <h4 className="text-light fw-light fst-italic">Sinsay kayo dine mga Kanayon!</h4>

                                <h1 className="fw-bold">Once you try it, you will love it.</h1>

                                <p className="mb-2 text-center text-light fw-light">Ika nga nila, "Ay pagkakasarap naman dine". Halina't inyong tikme! </p>

                                <div className="justify-content-center align-items-center text-center mt-5 pb-3">
                                    <a href="about" className="austriak-aboutus-btn btn btn-dark fs-4 fw-bold"><i class="fa-solid fa-play me-2"></i>Get to know about us</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div >

            <Footer></Footer>
        </>
    );
}


export default HomePage;