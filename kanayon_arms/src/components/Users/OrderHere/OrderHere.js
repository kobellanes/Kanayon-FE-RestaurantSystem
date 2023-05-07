import React from 'react';
import "./OrderHere.css"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function OrderHere() {
    return (
        <>
            <Header>
            </Header>

            <h4 className="LucidoML-orderhere-title fw-light mt-5 pb-2 text-ligh">TULOY ANG BANGE! TARA TIKME!</h4>
            <div className="container m-10 mt-5">
                <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 g-5">


                    <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/liempo.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title">LIEMPO</h5>
                                        <p className="card-text text-wrap">
                                            Grilled liempo with 1 rice
                                        </p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱119</span>
                                        </p>
                                        <br></br>
                                        <div className="card-text d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i class="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i class="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center ">
                                    <img src={require('../../../assets/pecho.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title">PECHO INASAL</h5>
                                        <p className="card-text text-wrap">
                                            Pecho Chicken Inasal with 1 rice
                                        </p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱122</span>
                                        </p>
                                        <br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i class="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i class="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/paa.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title">PAA INASAL</h5>
                                        <p className="card-text text-wrap">
                                            Paa Chicken Inasal with 1 rice
                                        </p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱119</span>
                                        </p>
                                        <br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i class="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i class="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/barbeque.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">BARBEQUE</h5>
                                        <p className="card-text text-wrap">
                                            Barbeque with 1 rice
                                        </p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱79</span>
                                        </p>
                                        <br></br><br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i class="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i class="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/sisig.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">SISIG</h5>
                                        <p className="card-text text-wrap">
                                            Kanayon Sisig with 1 rice
                                        </p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱119</span>
                                        </p>
                                        <br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i class="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i class="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="LucidoML-talong col-sm-6 col-md-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/talong.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">ENSALADANG TALONG</h5>
                                        <p className="LucidoML-des card-text text-wrap">
                                            Ensaladang talong pampagana meals</p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱55</span>
                                        </p>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i class="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i class="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/halohalo.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">HALO-HALO</h5>
                                        <p className="card-text text-wrap">
                                            Extra creamy halo-halo with ice cream, leche flan and ube</p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱45</span>
                                        </p>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i class="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i class="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/icetea.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">ICE TEA</h5>
                                        <p className="card-text text-wrap">
                                            1 Glass of ice tea</p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱15</span>
                                        </p>
                                        <br></br><br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i class="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i class="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="LucidoML-orderhere-card card d-flex align-items-center justify-content-center mb-3">
                            <div className="row g-0">
                                <div className="col-md-6 col-sm-6 py-3 ps-2 text-center">
                                    <img src={require('../../../assets/softdrinks.jpg')} className="LucidoML-orderhere-img-thumbnail card card-span text-white card-img-top" alt="..."></img>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="LucidoML-orderhere-card-title card-title">SOFTDRINKS</h5>
                                        <p className="card-text text-wrap">
                                            Any of your choice!</p>
                                        <p className="card-text">
                                            <span className="LucidoML-orderhere-text-title">₱20</span>
                                        </p>
                                        <br></br><br></br>
                                        <div className="d-flex justify-content-end align-items-end">
                                            <button className="LucidoML_minus_btn btn text-decoration-none me-3"><a href="#"><i class="fa-solid fa-minus"></i></a></button>
                                            <button className="LucidoML_plus_btn btn"><a href="#"><i class="fa-solid fa-plus"></i></a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
            <Footer>
            </Footer>
        </>
    );
}

export default OrderHere;