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

                        <div className="text-center">

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

                <section>

                    <div className="austria-container">

                        <div className="row h-100 g-0">

                            <div className="col-md-6">

                                <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">

                                    <h4 className="text-800">Unli rice na binabalik balikan, Halina dine Kanayon!</h4>

                                    <h1 className="fw-bold">Delicious Food to fit your lifestyle.</h1>

                                    <p className="mb-2">One of the reasons that people enjoy coming to a great restaurant is that when an extraordinary meal is placed in front of them, they feel honored, respected, and even a little bit loved.</p>

                                    <div className="justify-content-center align-items-center text-center mt-5 pb-3">
                                        <a href="about" className="austriak-aboutus-btn btn btn-dark fs-2"><i class="fa-solid fa-play me-2"></i>Read to know more abous us</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">

                                <div className="card card-span h-100 text-white">
                                    <img className="card-img h-100" src={require('../../../assets/customers1.jpg')}
                                        alt="Customers" />

                                    <div className="card-img-overlay bg-dark-gradient">


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row h-100 g-2 py-1">
                            <div className="col-md-4">
                                <div className="card card-span h-100 text-white"><img className="card-img h-100"
                                    src={require('../../../assets/customers17.jpg')} alt="Customers" />
                                    <div className="card-img-overlay bg-dark-gradient">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-span h-100 text-white"><img className="card-img h-100" src={require('../../../assets/customers14.jpg')}
                                    alt="Customers" />
                                    <div className="card-img-overlay bg-dark-gradient">

                                    </div>
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
                    </div>
                </section>
            </div >

            <Footer></Footer>
        </>
    );
}


export default HomePage;