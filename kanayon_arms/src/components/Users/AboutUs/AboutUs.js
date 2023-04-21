import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AboutUs.css';

function AboutUs() {
    return (
        <>
            <Header></Header>
            <section className="austriak-aboutus mt-5 pb-5">
                <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center">
                    <h1 className="austriak-aboutus-title text-center align-items-center fw-light text-light pb-2">Get to know us</h1>
                    <div className="austriak-aboutus-border mb-5 "></div>
                </div>

                <div className="container-fluid mt-4 d-flex flex-column flex-lg-row mx-lg-5 px-5 me-md-5 mb-5" >
                    <div className="austriak-col-6 col-lg-6 col-12 align-items-center mb-4">
                        <h1 className="mb-3 fw-bolder text-center">KANAYON INASAL</h1>
                        <p className="fw-light text-light"> Our barrio's grilled chicken or also known as chicken inasal wins the heart of every villager in our barangay, founded in September 10, 2022. Kanayon Inasal got its name from the term Kanayon which means "fellow local" that makes its name tattooed on the mind of every customer we serve.</p>
                    </div>

                    <div className="austriak-col-6 col-lg-6 flex-column justify-content-center align-items-center text-center">
                        <img className="austriak-aboutus-img-fluid rounded-5 col-12" src={require('../../../assets/family.jpg')} alt="Kanayon" />
                    </div>

                </div>

                <div className="container-fluid mt-4 d-flex flex-column flex-lg-row mx-lg-5 px-5 me-md-5 mb-5" >
                    <div className="austriak-col-6 col-lg-6 col-12 align-items-center mb-4">
                        <p className="fw-light text-light">The idea came about when the founder, Tatay Mio felt the need and the urge to feed and inspire people with this dish they so loved, chicken inasal. His family put a lot of effort into serving the best and quality food they could offer, from selecting the freshest meat up to adding the special, flavorful and authentic ingredients make our inasal become different from the others.</p>
                        <p className="fw-light text-light"> Kanayon Inasal is perfect for the budget concious or what we called the budgetaian because of its cheap price for a complete dinnner or lunch. </p>
                    </div>

                    <div className="austriak-col-6 col-lg-6 flex-column justify-content-center align-items-center text-center align-self-lg-end">
                        <img className="austriak-aboutus-img-fluid rounded-5 col-12" src={require('../../../assets/owner.jpg')} alt="Kanayon" />

                    </div>

                </div>

                <div className="container-fluid mt-4 d-flex flex-column flex-lg-row mx-lg-5 px-5 me-md-5 mb-5" >
                    <div className="austriak-col-6 col-lg-6 col-12 align-items-center mb-4 align-self-lg-center">
                        <p className="fw-light text-light"> Our restaurant is a simple store with a simple dream that puts a lot of hardwork and determination that focuses its people and continues to grow vigorously.  </p>
                    </div>

                    <div className="austriak-col-6 col-lg-6 flex-column justify-content-center align-items-center text-center align-self-lg-start">
                        <img className="austriak-aboutus-img-fluid rounded-5 col-12" src={require('../../../assets/logo.jpg')} alt="Kanayon" />

                    </div>

                </div>
            </section>

            <section className="mx-5">
                <div className="last-austriak pb-3">
                    <h1 className="text-center">Our family gets a little bigger every time you come by.</h1>
                </div>


                <div id="carouselExampleCaptions" className="carousel slide container-fluid justify-content-center align-items-center text-center">


                    <div className="carousel slide" id="austria_carousel" data-bs-ride="carousel" data-bs-interval="1500">

                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="col-12 mb-3 mb-md-0">
                                    <img className="austria-aboutus-img img-fluid" src={require('../../../assets/customers2.jpg')} alt="..." />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="col-12 mb-3 mb-md-0">
                                    <img className="austria-aboutus-img img-fluid" src={require('../../../assets/customers3.jpg')} alt="..." />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="col-12 mb-3 mb-md-0">
                                    <img className="austria-aboutus-img img-fluid" src={require('../../../assets/customers4.jpg')} alt="..." />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="col-12 mb-3 mb-md-0">
                                    <img className="austria-aboutus-img img-fluid" src={require('../../../assets/customers5.jpg')} alt="..." />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="col-12 mb-3 mb-md-0">
                                    <img className="austria-aboutus-img img-fluid" src={require('../../../assets/customers6.jpg')} alt="..." />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="col-12 mb-3 mb-md-0">
                                    <img className="austria-aboutus-img img-fluid" src={require('../../../assets/customers7.jpg')} alt="..." />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="col-12 mb-3 mb-md-0">
                                    <img className="austria-aboutus-img img-fluid" src={require('../../../assets/customers8.jpg')} alt="..." />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="col-12 mb-3 mb-md-0">
                                    <img className="austria-aboutus-img img-fluid" src={require('../../../assets/customers9.jpg')} alt="..." />
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="col-12 mb-3 mb-md-0">
                                    <img className="austria-aboutus-img img-fluid" src={require('../../../assets/customers10.jpg')} alt="..." />
                                </div>
                            </div>

                            <div className="row">
                                <button className="carousel-control-prev" type="button" data-bs-target="#austria_carousel"
                                    data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span
                                        className="visually-hidden">Previous</span></button>
                                <button className="carousel-control-next" type="button" data-bs-target="#austria_carousel"
                                    data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span
                                        className="visually-hidden">Next </span></button>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="justify-content-center align-items-center text-center mt-5 pb-3">
                    <a href="ordernow" className="austriak-aboutus-btn btn fs-2 text-light fw-light"><i class="fa-solid fa-basket-shopping"></i> Order Now</a>

                </div>
            </section>

            <Footer></Footer>
        </>
    );
}

export default AboutUs;