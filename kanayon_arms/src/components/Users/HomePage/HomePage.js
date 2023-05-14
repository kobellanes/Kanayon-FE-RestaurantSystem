import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './HomePage.css';

function HomePage() {

    return (
        <>
            <Header>

            </Header>
            <div className="mx-4 ps-1">
                <div className="container-fluid px-5">

                    <section className="dese_home-first mt-5 pt-2">

                        <div className="row">

                            <div className="text-center">

                                <div className=" carousel slide" id="dese_carousel" data-bs-ride="carousel" data-bs-interval="3000">

                                    <div className="carousel-inner">

                                        <div className="carousel-item active">
                                            <div className="dese_images col-12 mb-3 mb-md-0">
                                                <img className="dese_img img-fluid rounded-5" src={require('../../../assets/carousel-img1.png')} alt="Kanayon" />
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div className="dese_images col-12 mb-3 mb-md-0">
                                                <img className="dese_img img-fluid rounded-5" src={require('../../../assets/carousel-img2.png')} alt="Kanayon..." />
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div className="dese_images col-12 mb-3 mb-md-0">
                                                <img className="dese_img img-fluid rounded-5" src={require('../../../assets/carousel-img3.png')} alt="Kanayon..." />
                                            </div>

                                        </div>

                                        <div className="carousel-item">
                                            <div className="dese_images col-12 mb-3 mb-md-0">
                                                <img className="dese_img img-fluid rounded-5" src={require('../../../assets/carousel-img4.png')} alt="Kanayon..." />
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

                        <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center">
                            <div className="llanesk-homepage-border1"></div>
                            <div className="llanesk-homepage-border2"></div>
                            <div className="llanesk-homepage-border3"></div>
                        </div>

                    </section>

                    <section className="llanesk-homepage-s2">

                        <div className="mt-4">

                            <div className="llanesk-homepage-s2-cont d-flex flex-column justify-content-center">
                                <div className="mx-xl-5 px-xl-5">

                                    <h1 className="fw-light text-light text-center fst-italic">"Good food choices are good investments"</h1>

                                    <p className="text-light fw-light text-center mt-3 mx-xxl-5 px-xxl-5">Committed in providing a memorable dining experience for you and for your loved ones! Using only the freshest ingredients, quality flavors and our own special marinade will surely keep you in coming back for more.
                                        <span className="fw-bolder"> Once you try it, you will love it.</span>
                                    </p>
                                </div>

                            </div>
                        </div>

                    </section>

                    <section className="llanesk-homepage-s3">

                        <div className="mt-3">

                            <div className="container-fluid d-flex justify-content-center align-items-center text-center mb-3">

                                <div className="row d-flex">

                                    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 llanesk-homepage-s3-customers">
                                        <img className="rounded-5" src={require('../../../assets/customers14.jpg')}
                                            alt="KanayonCustomers" />
                                    </div>

                                    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 llanesk-homepage-s3-customers">
                                        <img className="rounded-5 " src={require('../../../assets/customers15.jpg')}
                                            alt="KanayonCustomers" />
                                    </div>

                                    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 llanesk-homepage-s3-customers">
                                        <img className="rounded-5" src={require('../../../assets/customers18.jpg')}
                                            alt="KanayonCustomers" />
                                    </div>

                                    <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 llanesk-homepage-s3-customers">
                                        <img className="rounded-5" src={require('../../../assets/customers3.jpg')}
                                            alt="KanayonCustomers" />
                                    </div>

                                </div>
                            </div>

                            <div className="">

                                <div className="row">
                                    <div className="text-center justify-content-center llanesk-homepage-s3-cont mt-2">

                                        <h1 className="text-light fw-light fst-italic">"Let our food be the reason you smile today"</h1>

                                        <div className="mx-xl-5 px-xl-5">
                                            <p className="mt-3 text-center text-light fw-light mx-xxl-5 px-xxl-5">

                                                We take pride in creating meals that not only satisfy your hunger but also put a smile on your face
                                                and we look look forward to serving you!
                                                Whether you're dining with friends or family, or simply looking for a delicious meal,
                                                we invite you to visit us and discover why we're the go-to choice for the Filipino cuisine in the area.
                                                <span className="fw-bolder">Ika nga nila, "Ay pagkakasarap naman dine, Halina't inyong tikme!"</span>
                                            </p>
                                        </div>

                                        <div className="justify-content-center align-items-center text-center pt-2 pb-3">
                                            <a href="about" className="austriak-homepage-s3-btn btn fw-bold align-items-center"><i className="fa-solid fa-play me-2"></i>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>




                    <section className="austriak-homepage-s4">
                        <div className="mt-3">
                            <div className="row">
                                <div className="container-fluid d-flex flex-row justify-content-center align-items-center text-center mb-3">
                                    <div className="col-6">
                                        <div className="austria_firstcol row row-cols-2">
                                            <div className="col">
                                                <img className="austriapc ms-5" src={require('../../../assets/1KatakamtakamS4.jpg')} />
                                            </div>
                                            <div className="col">
                                                <img className="austriapc me-5" src={require('../../../assets/4KatakamtakamS4.jpg')} />
                                            </div>
                                            <div className="col">
                                                <img className="austriapc ms-5 mt-2" src={require('../../../assets/3KatakamtakamS4.jpg')} />
                                            </div>
                                            <div className="col">
                                                <img className="austriapc me-5 mt-2" src={require('../../../assets/2KatakamtakamS4.jpg')} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="austriakccol">
                                            <h1 className="kylah1">"Satisfy your cravings, elevate your taste buds"</h1>
                                            <p className="kylacol text-light fw-light px-xxl-5">
                                                Experience a taste of heaven with Kanayon Inasal's mouthwatering dishes where each bite is a journey to foodie paradise!
                                            </p>
                                        </div>
                                        <div className="justify-content-center align-items-center text-center mt-5 pb-3">

                                            <a href="ordernow" className="austriak-aboutus-btn btn btn-dark"><i className="fa-solid fa-basket-shopping me-2"></i> Order Now</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div >

            </div >
            <Footer></Footer>
        </>
    );
}


export default HomePage;