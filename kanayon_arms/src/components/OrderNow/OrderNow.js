import React from 'react';
import "./OrderNow.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function OrderNow() {
    return (
        <>
            <Header>

            </Header>
            <h1 className="fw-bold fs-2 fs-lg-6 lh-sm mb-3 mt-5 pt-5">Tuloy Ang Bange! Tara Tikme!</h1>
            {/* <div className="card-group">
                <div className="card container">
                    <img src={require('../../assets/paa.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">PAA INASAL</h5>
                        <p className="card-text fs-5">₱ 89</p>
                        <p className="card-text">
                            <small className="text fs-6">solo</small></p>
                        <button className="btn btn-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">Select</button>
                    </div>

                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <p className="text-dark">~~~DESCRIPTION OF PAA INASAL~~~~</p>
                            <div class="dropdown mb-2">
                                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Variation
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><a class="dropdown-item btn-dark" href="#">Solo</a></li>
                                    <li><a class="dropdown-item" href="#">Single Rice</a></li>
                                    <li><a class="dropdown-item" href="#">Unli Rice</a></li>
                                </ul>
                            </div>
                            <button type="button" className="btn btn-dark">Order Now</button>
                        </div>
                    </div>
                </div> */}

            <div class="d-flex flex-wrap">
                <div class="card col-3">
                    <div class="card-header">
                        <img src={require('../../assets/paa.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                        <h5 class="card-title">PAA INASAL</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Card content goes here</p>

                        <div class="dropdown mb-2">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Variation
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item btn-dark" href="#">Solo ₱ 89</a></li>
                                <li><a class="dropdown-item" href="#">Single Rice</a></li>
                                <li><a class="dropdown-item" href="#">Unli Rice</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-dark btn-end">Order Now</button>
                    </div>
                </div>


                <div class="card col-3">
                    <div class="card-header">
                        <img src={require('../../assets/pecho.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                        <h5 class="card-title">PECHO INASAL</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Card content goes here</p>

                        <div class="dropdown mb-2">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Variation
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item btn-dark" href="#">Solo ₱ 89</a></li>
                                <li><a class="dropdown-item" href="#">Single Rice</a></li>
                                <li><a class="dropdown-item" href="#">Unli Rice</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-dark btn-end">Order Now</button>
                    </div>
                </div>

                <div class="card col-3">
                    <div class="card-header">
                        <img src={require('../../assets/liempo.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                        <h5 class="card-title">LIEMPO INASAL</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Card content goes here</p>

                        <div class="dropdown mb-2">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Variation
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item btn-dark" href="#">Solo ₱ 89</a></li>
                                <li><a class="dropdown-item" href="#">Single Rice</a></li>
                                <li><a class="dropdown-item" href="#">Unli Rice</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-dark btn-end">Order Now</button>
                    </div>
                </div>


                <div class="card col-3">
                    <div class="card-header">
                        <img src={require('../../assets/barbeque.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                        <h5 class="card-title">PORK BBQ</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Card content goes here</p>

                        <div class="dropdown mb-2">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Variation
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item btn-dark" href="#">Solo ₱ 89</a></li>
                                <li><a class="dropdown-item" href="#">Single Rice</a></li>
                                <li><a class="dropdown-item" href="#">Unli Rice</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-dark btn-end">Order Now</button>
                    </div>
                </div>
            </div>




            {/* <div className="card container">
                <img src={require('../../assets/pecho.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title fw-bold">PECHO INASAL</h5>
                    <p className="card-text fs-5">₱ 92</p>
                    <p className="card-text">
                        <small className="text fs-6">solo</small></p>
                    <button className="btn btn-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">Select</button>
                </div>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <p className="text-dark">~~~DESCRIPTION OF PECHO INASAL~~~~</p>
                        <div class="dropdown mb-2">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Variation
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item btn-dark" href="#">Solo</a></li>
                                <li><a class="dropdown-item" href="#">Single Rice</a></li>
                                <li><a class="dropdown-item" href="#">Unli Rice</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-dark">Order Now</button>
                    </div>
                </div>
            </div>

            <div className="card container">
                <img src={require('../../assets/liempo.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title fw-bold">LIEMPO INASAL</h5>
                    <p className="card-text fs-5">₱ 89</p>
                    <p className="card-text">
                        <small className="text fs-6">solo</small></p>
                    <button className="btn btn-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">Select</button>
                </div>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <p className="text-dark">~~~DESCRIPTION OF LIEMPO INASAL~~~~</p>
                        <div class="dropdown mb-2">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Variation
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item btn-dark" href="#">Solo</a></li>
                                <li><a class="dropdown-item" href="#">Single Rice</a></li>
                                <li><a class="dropdown-item" href="#">Unli Rice</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-dark">Order Now</button>
                    </div>
                </div>
            </div>

            <div className="card">
                <img src={require('../../assets/barbeque.jpg')} className="img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title fw-bold">PORK BBQ</h5>
                    <p className="card-text fs-5">₱ 25</p>
                    <p className="card-text">
                        <small className="text fs-6">solo</small></p>
                    <button className="btn btn-light" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">Select</button>
                </div>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasMenuLabel">Menu</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <p className="text-dark">~~~DESCRIPTION OF PORK BBQ~~~~</p>
                        <div class="dropdown mb-2">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Variation
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item btn-dark" href="#">Solo</a></li>
                                <li><a class="dropdown-item" href="#">Single Rice</a></li>
                                <li><a class="dropdown-item" href="#">Unli Rice</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-dark">Order Now</button>
                    </div>
                </div>
            </div> */}
            {/* </div > */}
            <Footer></Footer>
        </>
    );
}

export default OrderNow;