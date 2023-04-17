import React from 'react';
import kanayon from '../../assets/logo.jpg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AboutUs.css';
import pecho from '../../assets/pecho.jpg';
import paa from '../../assets/paa.jpg';
import customer1 from '../../assets/customers1.jpg';
import customer2 from '../../assets/customers2.jpg';
import customer3 from '../../assets/customers3.jpg';
import customer4 from '../../assets/customers4.jpg';
import customer5 from '../../assets/customers5.jpg';
import customer6 from '../../assets/customers6.jpg';
import customer7 from '../../assets/customers7.jpg';
import customer8 from '../../assets/customers8.jpg';
import customer9 from '../../assets/customers9.jpg';
import customer10 from '../../assets/customers10.jpg';

function AboutUs() {
    return (
        <>
            <Header></Header>
            <div className="AboutUs">
                <div className="head">
                    <h3>ABOUT US</h3>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6 p-25">


                            <h1>KANAYON INASAL</h1>

                            <p>Our barrio's grilled chicken or alson known as chicken inasal wins the heart of every villager in our barangay, founded in September 10, 2022. Kanayon Inasal got its name from the term Kanayon which means "fellow local" that makes its name tattoed on the mind of every customer we serve.</p>


                            <p>The idea came about when the founder, Tatay Mio felt the need and the urge to feed and inspire people with this dish they so loved, chicken inasal. His family put a lot of effort into serving the best and quality food they could offer, from selecting the freshest meat up to adding the special, flavorful and authentic ingredients make our inasal become different from the others.</p>


                            <p> Kanayon inasal is perfect for the budget concious or what we called the budgetaian because of its cheap price for a complete dinnner or lunch. Our restaurant is a simple store with a simple dream that puts a lot of hardwork and determination that focuses its people and continues to grow vigorously.</p>


                        </div>

                        <div className="col-6">
                            <div className="AboutUs__img">
                                <img className="img-fluid" src={kanayon} width="450" alt="Kanayon" />
                                <img className="img-fluid pic" src={paa} width="450" alt="Kanayon" />
                                <img className="img-fluid pic2" src={pecho} width="450" alt="Kanayon" />
                            </div>
                        </div>

                        <div className="last">
                            <div className="last-austriak">
                                <h1>Our family gets a little bigger every time you come by.</h1>
                            </div>
                        </div>
                        <div id="carouselExampleCaptions" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>


                            <div className="carousel slide" id="austria_carousel" data-bs-ride="carousel" data-bs-interval="3000">

                                <div className="carousel-inner">

                                    <div className="carousel-item active">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer1} alt="..." />

                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer2} alt="..." />

                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer3} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer4} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer5} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer6} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer7} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer8} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer9} alt="..." />
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="col-12 mb-3 mb-md-0">
                                            <img className="austria_img img-fluid" src={customer10} alt="..." />
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
                            {/* 
                            <div className="AboutUs__btn">
                                <a href="ordernow" className="btn btn-smart btn btn-dark">ORDER NOW</a>

                            </div> */}
                        </div>
                    </div>

                    <div className="AboutUs__btn">
                        <a href="ordernow" className="btn btn-smart btn btn-dark">ORDER NOW</a>

                    </div>
                </div >
            </div>
            <Footer></Footer>
        </>
    );
}

export default AboutUs;